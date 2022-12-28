import React from "react";
import Posts from "@/components/Posts";

import { BsSearch } from "react-icons/bs";

export default function Profile() {
  return (
    <div className="h-screen">
      <h1 className="font-semibold text-xl pb-2 mb-5 border-b border-b-white">
        Search
      </h1>

      <div>
        <div>
          <form>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Players, Clubs..."
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="mt-5">
          <p>Age</p>
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            class="w-full text-white font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex justify-between items-center bg-blue-500"
            type="button"
          >
            <p>Any</p>
            <svg
              class="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="mt-5">
          <p>Position</p>
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            class="w-full text-white font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex justify-between items-center bg-blue-500"
            type="button"
          >
            <p>Any</p>
            <svg
              class="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="mt-5">
          <p>Nationality</p>
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            class="w-full text-white font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex justify-between items-center bg-blue-500"
            type="button"
          >
            <p>Any</p>
            <svg
              class="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="mt-5">
          <p>Status</p>
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            class="w-full text-white font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex justify-between items-center bg-blue-500"
            type="button"
          >
            <p>Any</p>
            <svg
              class="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="mt-5">
          <p>Language</p>
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            class="w-full text-white font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex justify-between items-center bg-blue-500"
            type="button"
          >
            <p>Any</p>
            <svg
              class="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="mt-5">
          <p>Custom</p>
          <div className="flex">
            <div className="w-fit bg-blue-400 py-2 px-5 rounded mr-2">
              Injury
            </div>
            <div className="w-fit bg-white text-black py-2 px-5 rounded">+</div>
          </div>
        </div>
      </div>
    </div>
  );
}
