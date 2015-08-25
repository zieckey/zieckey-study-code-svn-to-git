//////////////////////////////////////////////////////////////////////////
//  Class Name: BKBmpPool
// Description: Bitmap Pool
//     Creator: ZhangXiaoxuan
//     Version: 2009.4.24 - 1.0 - Create
//////////////////////////////////////////////////////////////////////////

#pragma once

#include <atlcoll.h>

// 单件模式
// 具体的加载由BkResManager来完成
// 用map来完成uBmpResID和HBITMAP的关联

class BkBmpPool
{
public:
    BkBmpPool()
    {
    }
    virtual ~BkBmpPool()
    {
        HBITMAP hbmp = NULL;

        POSITION pos = m_mapBitmap.GetStartPosition();

        while (pos != NULL) 
        {
            hbmp = m_mapBitmap.GetNextValue(pos);
            if (hbmp)
                ::DeleteObject(hbmp);
        }

        m_mapBitmap.RemoveAll();
    }

    typedef CAtlMap<UINT, HBITMAP> _TypeBitmapPool;

    static HBITMAP GetBitmap(UINT uBmpResID)
    {
        _TypeBitmapPool::CPair* pPairRet = _Instance()->m_mapBitmap.Lookup(uBmpResID);
        HBITMAP hbmpRet = NULL;

        if (NULL == pPairRet)
        {
            BkResManager::LoadResource(uBmpResID, hbmpRet);
            if (hbmpRet)
                _Instance()->m_mapBitmap[uBmpResID] = hbmpRet;
        }
        else
            hbmpRet = pPairRet->m_value;

        return hbmpRet;
    }

    static size_t GetCount()
    {
        return _Instance()->m_mapBitmap.GetCount();
    }

	static void Clear()
	{
		HBITMAP hbmp = NULL;

        POSITION pos = _Instance()->m_mapBitmap.GetStartPosition();

        while (pos != NULL) 
        {
            hbmp = _Instance()->m_mapBitmap.GetNextValue(pos);
            if (hbmp)
                ::DeleteObject(hbmp);
        }

        _Instance()->m_mapBitmap.RemoveAll();
	}

protected:
    _TypeBitmapPool m_mapBitmap;

    static BkBmpPool* ms_pInstance;

    static BkBmpPool* _Instance()
    {
        if (!ms_pInstance)
            ms_pInstance = new BkBmpPool;
        return ms_pInstance;
    }
};

__declspec(selectany) BkBmpPool* BkBmpPool::ms_pInstance = NULL;