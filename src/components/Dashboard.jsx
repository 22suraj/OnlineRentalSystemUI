import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const Dashboard = () => {
  const [openModel, setOpenModel] = useState(false);
  const [openPlacedModal, setPlacedModal] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [owner, setOwner] = useState("");
  const [description, setDescription] = useState("");

  const [products, setProducts] = useState([]);

  const [deleteId, setDeleteId] = useState("");

  const getProducts = async () => {
    const respose = await fetch("https:localhost:7085/api/products");
    console.log(respose);
    setProducts(await respose.json());
  };

  const [typeName, setTypeName] = useState(null);

  const addProducts = async () => {
    console.warn(title, subtitle, owner, description);
    let data = { title, subtitle, owner, description };
    const respose = await fetch("https://localhost:7085/api/createproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(respose);
  };

  const deleteProducts = async (productId) => {
    console.warn(productId);
    let data = { productId };
    const respose = await fetch("https://localhost:7085/api/deleteproducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: productId,
      }),
    });
    console.log(respose);
    getProducts();
  };

  const addButtonUI = () => {
    return (
      <>
        <button
          type="button"
          onClick={() => {
            setOpenModel(true);
          }}
          class="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Product
        </button>
      </>
    );
  };

  useEffect(() => {
    getProducts();
    setTypeName(localStorage.getItem("type"));
    console.warn(localStorage.getItem("type"));
    // addProducts();
  }, []);

  return (
    <>
      <div className="h-full bg-slate-300">
        <nav class="bg-white  border-gray-200 px-2 sm:px-4 rounded-b-2xl dark:bg-gray-800 shadow-lg">
          <div class="px-4 flex flex-wrap justify-between items-center mx-auto">
            <div class="flex">
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="pl-5 text-center text-3xl font-extrabold text-gray-900 self-center">
                Online Rental System
              </h2>
            </div>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  {/* addhere */}
                  {typeName === "Vendor" ? (
                    <button
                      type="button"
                      onClick={() => {
                        setOpenModel(true);
                      }}
                      class="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add Product
                    </button>
                  ) : (
                    <div></div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {openModel && (
          <div className="fixed pin inset-0 z-50 overflow-auto bg-smoke-light flex">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
              <h2 className="text-center text-2xl font-bold text-gray-900">
                Product Form
              </h2>

              <form className=" space-y-6">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="title" className="sr-only">
                      Title
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="subtitle" className="sr-only">
                      Subtitle
                    </label>
                    <input
                      id="subtitle"
                      name="subtitle"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Subtitle"
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="owner" className="sr-only">
                      Owner
                    </label>
                    <input
                      id="owner"
                      name="owner"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Owner Name"
                      value={owner}
                      onChange={(e) => setOwner(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="description" className="sr-only">
                      Description
                    </label>
                    <input
                      id="description"
                      name="description"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border rounded-b-md border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <button
                    onClick={addProducts}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                    </span>
                    Add Product
                  </button>
                </div>
              </form>
              <div className="h-2"></div>
              <div>
                <button
                  type="submit"
                  onClick={() => {
                    setOpenModel(false);
                  }}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                  </span>
                  Cancel
                </button>
              </div>
              <span className="absolute top-0 right-0 p-4"></span>
            </div>
          </div>
        )}

        <div className="p-8">
          <div class="grid grid-cols-4 gap-4">
            {products.map((currentElement) => {
              return (
                <>
                  {openPlacedModal && (
                    <div class="fixed pin inset-0 z-50 top-20 mx-auto h-96 p-5 border w-96 shadow-lg rounded-md bg-white flex overflow-auto">
                      <div class="mt-3 text-center">
                        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                          <svg
                            class="h-6 w-6 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                          Order Successfully Placed!
                        </h3>
                        <div class="mt-2 px-7 py-3">
                          <p class="text-sm text-gray-500">
                            Thanks fo placing the order from Online Rental System !!
                          </p>
                        </div>
                        <div class="items-center px-4 py-3">
                          <button
                            id="ok-btn"
                            onClick={() => {
                              setPlacedModal(false);
                            }}
                            class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                          >
                            OK
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                      class="w-full"
                      src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Bentley/Flying-Spur/7776/1587104359393/front-left-side-47.jpg?tr=h-48"
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4">
                      <div className="flex justify-between">
                        <div class="font-bold text-xl mb-2">
                          {currentElement.title}
                        </div>
                        {typeName == "Vendor" ? (
                          <button
                            type="submit"
                            onClick={() => {
                              deleteProducts(currentElement.id);
                            }}
                            class="bg-red-500 hover:bg-red-700 text-white font-semibold px-2 rounded-full shadow-lg"
                          >
                            Delete
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setPlacedModal(true);
                            }}
                            class="bg-green-500 hover:bg-green-700 text-white font-semibold px-2 rounded-full shadow-lg"
                          >
                            Place Order
                          </button>
                        )}
                      </div>

                      <p class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Subtitle : {currentElement.subtitle}
                      </p>
                      <p class="inline-block bg-gray-200  px-3 py-1 rounded-lg font-semibold text-gray-700 mr-2 mb-2 text-base">
                        Description : {currentElement.description}
                      </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Owner Name : {currentElement.owner}
                      </span>

                      {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span> */}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
