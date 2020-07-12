exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users")
    .truncate()
    .then(async function () {
      // Inserts seed entries
      await knex("users").insert([
        { id: 1, username: "john", password: "appleseed" },
        { id: 2, username: "jim", password: "johns" },
        { id: 3, username: "jack", password: "black" },
      ]);
    });
};
