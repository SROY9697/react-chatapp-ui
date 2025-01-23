import user from "../reducers/user";

export const data = {
  profile: {
    id: 1,
    name: "SROY",
    image: user.image,
    contacts: [
      {
        id: 2,
        name: "Sourav",
        image:
          "https://images.pexels.com/photos/30159714/pexels-photo-30159714/free-photo-of-stylish-man-in-sunglasses-by-a-bridge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        chatlog: [
          {
            text: "Hi Bro,How are you!",
            timestamp: "11:21 AM",
            sender: "user",
            message_id: 1,
          },
          {
            text: "Good,man. How are you!",
            timestamp: "11:22 AM",
            sender: "me",
            message_id: 2,
          },
          {
            text: "I am great, SROY.",
            timestamp: "10:03 AM",
            sender: "user",
            message_id: 3,
          },
          {
            text: "will call you after sometime",
            timestamp: "10:04 AM",
            sender: "user",
            message_id: 4,
          },
          {
            text: "Sure !",
            timestamp: "10:05 AM",
            sender: "me",
            message_id: 5,
          },
        ],
      },
      {
        id: 3,
        name: " Antoine",
        image:
          "https://images.pexels.com/photos/4101781/pexels-photo-4101781.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        chatlog: [
          {
            text: "Hi !",
            timestamp: "10:01 AM",
            sender: "user",
            message_id: 1,
          },
          {
            text: "hello, who is this?",
            timestamp: "10:02 AM",
            sender: "me",
            message_id: 2,
          },
          {
            text: "I am Antoine, from Jio service",
            timestamp: "10:03 AM",
            sender: "user",
            message_id: 3,
          },
          {
            text: "this is regarding your issue",
            timestamp: "10:04 AM",
            sender: "user",
            message_id: 4,
          },
          {
            text: "let me give some time",
            timestamp: "10:05 AM",
            sender: "me",
            message_id: 5,
          },
        ],
      },
      {
        id: 4,
        name: "Sophie",
        image:
          "https://images.pexels.com/photos/19613151/pexels-photo-19613151/free-photo-of-woman-in-sweater-working-on-laptop-and-reading-a-book.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        chatlog: [
          {
            text: "Hi, SROY!",
            timestamp: "10:01 AM",
            sender: "user",
            message_id: 1,
          },
          {
            text: "Hello Sophie. How are you!",
            timestamp: "10:02 AM",
            sender: "me",
            message_id: 2,
          },
          {
            text: "I am great ",
            timestamp: "10:03 AM",
            sender: "user",
            message_id: 3,
          },
          {
            text: "r u busy??",
            timestamp: "10:04 AM",
            sender: "user",
            message_id: 4,
          },
          {
            text: " no!",
            timestamp: "10:05 AM",
            sender: "me",
            message_id: 5,
          },
        ],
      },
      {
        id: 5,
        name: "Olivia",
        image:
          "https://images.pexels.com/photos/30004713/pexels-photo-30004713/free-photo-of-elegant-portrait-of-woman-in-white-lace-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        chatlog: [],
      },
      {
        id: 6,
        name: "Benjamin",
        image:
          "https://st3.depositphotos.com/11233746/13899/i/600/depositphotos_138998024-stock-photo-handsome-young-man.jpg",
        chatlog: [
          {
            text: "Hey SROY, can we meet now?",
            timestamp: "10:01 AM",
            sender: "user",
            message_id: 1,
          },
          {
            text: "yes, i think",
            timestamp: "10:02 AM",
            sender: "me",
            message_id: 2,
          },
          {
            text: "is everything alright, Bro?",
            timestamp: "10:02 AM",
            sender: "me",
            message_id: 2,
          },
          {
            text: "yes yes...need some clarification",
            timestamp: "10:03 AM",
            sender: "user",
            message_id: 3,
          },
          {
            text: "All right Benjamin...",
            timestamp: "10:05 AM",
            sender: "me",
            message_id: 5,
          },
        ],
      },
      {
        id: 7,
        name: "Johannes",
        image:
          "https://st3.depositphotos.com/33359910/37659/i/600/depositphotos_376597274-stock-photo-handsome-smiling-young-man-isolated.jpghttps://st3.depositphotos.com/33359910/37659/i/600/depositphotos_376597274-stock-photo-handsome-smiling-young-man-isolated.jpg",
        chatlog: [
          {
            text: "Where are you bro ? ",
            timestamp: "10:06 AM",
            sender: "me",
            message_id: 1,
          },
          {
            text: "I'm in Market",
            timestamp: "10:06 AM",
            sender: "user",
            message_id: 2,
          },
          {
            text: "call me ....",
            timestamp: "10:07 AM",
            sender: "me",
            message_id: 3,
          },
          {
            text: "ok",
            timestamp: "10:08 AM",
            sender: "user",
            message_id: 4,
          },
        ],
      },
      {
        id: 8,
        name: "David",
        image:
          "https://st2.depositphotos.com/1273995/8790/i/600/depositphotos_87904862-stock-photo-portrait-of-bearded-man.jpg",
        chatlog: [],
      },
    ],
  },
};
