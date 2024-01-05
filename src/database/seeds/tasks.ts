import { Knex } from "knex";

const TABLE_NAME = "tasks";

/**
 * Delete existing entries and seed values for table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export function seed(knex: Knex): Promise<void> {
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          title: "learn something",
          description: "new recipe",
          added_date: "2023-05-23",
          is_completed: true,
        },
        {
          title: "learn something",
          description: "new recipe",
          added_date: "2023-05-23",
          is_completed: true,
        },
        {
          title: "exercise",
          description: "morning workout",
          added_date: "2023-05-24",
          is_completed: false,
        },
        {
          title: "read a book",
          description: "fiction novel",
          added_date: "2023-05-25",
          is_completed: false,
        },
        {
          title: "coding practice",
          description: "work on a project",
          added_date: "2023-05-26",
          is_completed: true,
        },
        {
          title: "watch a movie",
          description: "comedy film",
          added_date: "2023-05-27",
          is_completed: false,
        },
        {
          title: "buy groceries",
          description: "vegetables and fruits",
          added_date: "2023-05-28",
          is_completed: false,
        },
        {
          title: "take a nap",
          description: "afternoon siesta",
          added_date: "2023-05-29",
          is_completed: true,
        },
        {
          title: "call a friend",
          description: "catch up",
          added_date: "2023-05-30",
          is_completed: false,
        },
        {
          title: "learn a new language",
          description: "basic phrases",
          added_date: "2023-05-31",
          is_completed: true,
        },
        {
          title: "gardening",
          description: "plant flowers",
          added_date: "2023-06-01",
          is_completed: false,
        },
        {
          title: "write a blog post",
          description: "tech-related content",
          added_date: "2023-06-02",
          is_completed: false,
        },
        {
          title: "take a cooking class",
          description: "Italian cuisine",
          added_date: "2023-06-03",
          is_completed: true,
        },
        {
          title: "attend a virtual conference",
          description: "industry insights",
          added_date: "2023-06-04",
          is_completed: false,
        },
        {
          title: "paint a picture",
          description: "acrylic on canvas",
          added_date: "2023-06-05",
          is_completed: false,
        },
        {
          title: "plan a weekend getaway",
          description: "beach destination",
          added_date: "2023-06-06",
          is_completed: true,
        },
        {
          title: "try a new restaurant",
          description: "local cuisine",
          added_date: "2023-06-07",
          is_completed: false,
        },
        {
          title: "volunteer at a charity event",
          description: "community service",
          added_date: "2023-06-08",
          is_completed: false,
        },
        {
          title: "organize a game night",
          description: "board games with friends",
          added_date: "2023-06-09",
          is_completed: true,
        },
        {
          title: "take a scenic hike",
          description: "nature trail",
          added_date: "2023-06-10",
          is_completed: false,
        },
        {
          title: "learn to play a musical instrument",
          description: "piano basics",
          added_date: "2023-06-11",
          is_completed: true,
        },
        // Add more as needed
      ]);
    });
}
