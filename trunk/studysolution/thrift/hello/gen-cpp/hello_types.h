/**
 * Autogenerated by Thrift Compiler (0.7.0)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
#ifndef hello_TYPES_H
#define hello_TYPES_H

#include <Thrift.h>
#include <TApplicationException.h>
#include <protocol/TProtocol.h>
#include <transport/TTransport.h>



namespace hello {

struct SexType {
  enum type {
    MALE = 1,
    FEMALE = 2
  };
};

extern const std::map<int, const char*> _SexType_VALUES_TO_NAMES;

typedef struct _User__isset {
  _User__isset() : firstname(false), lastname(false), user_id(false), sex(false), active(false), description(false) {}
  bool firstname;
  bool lastname;
  bool user_id;
  bool sex;
  bool active;
  bool description;
} _User__isset;

class User {
 public:

  static const char* ascii_fingerprint; // = "91A4D70357F54081AD8F263E934234C0";
  static const uint8_t binary_fingerprint[16]; // = {0x91,0xA4,0xD7,0x03,0x57,0xF5,0x40,0x81,0xAD,0x8F,0x26,0x3E,0x93,0x42,0x34,0xC0};

  User() : firstname(""), lastname(""), user_id(0), active(0), description("") {
  }

  virtual ~User() throw() {}

  std::string firstname;
  std::string lastname;
  int32_t user_id;
  SexType::type sex;
  bool active;
  std::string description;

  _User__isset __isset;

  void __set_firstname(const std::string& val) {
    firstname = val;
  }

  void __set_lastname(const std::string& val) {
    lastname = val;
  }

  void __set_user_id(const int32_t val) {
    user_id = val;
  }

  void __set_sex(const SexType::type val) {
    sex = val;
  }

  void __set_active(const bool val) {
    active = val;
  }

  void __set_description(const std::string& val) {
    description = val;
    __isset.description = true;
  }

  bool operator == (const User & rhs) const
  {
    if (!(firstname == rhs.firstname))
      return false;
    if (!(lastname == rhs.lastname))
      return false;
    if (!(user_id == rhs.user_id))
      return false;
    if (!(sex == rhs.sex))
      return false;
    if (!(active == rhs.active))
      return false;
    if (__isset.description != rhs.__isset.description)
      return false;
    else if (__isset.description && !(description == rhs.description))
      return false;
    return true;
  }
  bool operator != (const User &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const User & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};

typedef struct _InvalidValueException__isset {
  _InvalidValueException__isset() : error_code(false), error_msg(false) {}
  bool error_code;
  bool error_msg;
} _InvalidValueException__isset;

class InvalidValueException : public ::apache::thrift::TException {
 public:

  static const char* ascii_fingerprint; // = "3F5FC93B338687BC7235B1AB103F47B3";
  static const uint8_t binary_fingerprint[16]; // = {0x3F,0x5F,0xC9,0x3B,0x33,0x86,0x87,0xBC,0x72,0x35,0xB1,0xAB,0x10,0x3F,0x47,0xB3};

  InvalidValueException() : error_code(0), error_msg("") {
  }

  virtual ~InvalidValueException() throw() {}

  int32_t error_code;
  std::string error_msg;

  _InvalidValueException__isset __isset;

  void __set_error_code(const int32_t val) {
    error_code = val;
  }

  void __set_error_msg(const std::string& val) {
    error_msg = val;
  }

  bool operator == (const InvalidValueException & rhs) const
  {
    if (!(error_code == rhs.error_code))
      return false;
    if (!(error_msg == rhs.error_msg))
      return false;
    return true;
  }
  bool operator != (const InvalidValueException &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const InvalidValueException & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};

} // namespace

#endif
