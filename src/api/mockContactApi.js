import delay from './delay';

// mock API with hard coded data
// setTimeout is used to simulate the delay of an AJAX call.
const contacts = [
  {
    id: "Tom-Smith",
    name: "Tom Smith",
    email: "smith@test.com",
  },
  {
    id: "Jane-Doe",
    name: "Jane Doe",
    email: "jdoe@test.com",
  },
  {
    id: "info",
    name: "info",
    email: "info@test.com",
  },
  {
    id: "test",
    name: "test",
    email: "test@test.com",
  },
  {
    id: "service",
    name: "service",
    email: "service@test.com",
  }
];

class ContactApi {
  static getAllContacts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], contacts));
      }, delay);
    });
  }
}

export default ContactApi;