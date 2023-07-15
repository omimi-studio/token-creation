"use client";
import React, { useState } from "react";
export default function Index() {
  const [tokenDetails, setTokenDetails] = useState({});
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    e.preventDefault;
    setTokenDetails({ ...tokenDetails, [name]: value });
    console.log("token Details >>", tokenDetails);
  };
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20 ">
      <form>
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white">
              Token Creation
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              This information will be used to create a token
            </p>

            <div className="mt-2 flex items-center gap-x-3">
              <button
                type="button"
                className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
              >
                Select Network
              </button>
              <button
                type="button"
                className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
              >
                Connect Wallet
              </button>
            </div>
          </div>

          <div className="border-b border-white/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white">
              Token Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              (*) fields are required
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* information */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Name *
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="e.g. NEW Token"
                    autoComplete="given-name"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="symbol"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Symbol *
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="symbol"
                    id="symbol"
                    autoComplete="symbol"
                    placeholder="e.g. NEW"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="decimals"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Decimals *
                </label>
                <div className="mt-2">
                  <input
                    id="decimals"
                    name="decimals"
                    type="number"
                    autoComplete="decimals"
                    placeholder="e.g. 10"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="total-supply"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Total Sypply *
                </label>
                <div className="mt-2">
                  <input
                    id="total-supply"
                    name="total-supply"
                    type="number"
                    autoComplete="total-supply"
                    placeholder="e.g. 1000000"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="router"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Router *
                </label>
                <div className="mt-2">
                  <select
                    id="router"
                    name="router"
                    autoComplete="router"
                    placeholder="e.g. Select Router Exchange"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                  >
                    <option>ROUTE 1</option>
                    <option>ROUTE 2</option>
                    <option>ROUTE 3</option>
                  </select>
                </div>
              </div>

              {/* burn */}
              <div className="border-b border-white/10 pb-12 col-span-full" />
              <div className="sm:col-span-6 flex gap-x-3 mt-6">
                <div className="flex h-6 items-center">
                  <input
                    id="auto-burn"
                    name="auto-burn"
                    type="checkbox"
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-white/10 bg-white/5 text-red-600 focus:ring-red-600 focus:ring-offset-gray-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <p className="text-gray-400">Auto Burn</p>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="burn-fee"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Burn Fee(%) *
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="burn-fee"
                    id="burn-fee"
                    placeholder="e.g. 1"
                    autoComplete="burn-fee"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="burn-wallet"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Burn Wallet *
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="burn-wallet"
                    id="burn-wallet"
                    autoComplete="burn-wallet"
                    placeholder="e.g. 0x0000000000000...ad"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* liquidity */}
              <div className="border-b border-white/10 pb-12 col-span-full" />
              <div className="sm:col-span-6 flex gap-x-3 mt-6">
                <div className="flex h-6 items-center">
                  <input
                    id="auto-liquidity"
                    name="auto-liquidity"
                    type="checkbox"
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-white/10 bg-white/5 text-red-600 focus:ring-red-600 focus:ring-offset-gray-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <p className="text-gray-400">Auto Liquidity</p>
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="Liquidity-fee"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Liquidity Fee(%) *
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="liquidity-fee"
                    id="liquidity-fee"
                    autoComplete="liquidity-fee"
                    placeholder="e.g. 1"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* marketing */}
              <div className="border-b border-white/10 pb-12 col-span-full" />
              <div className="sm:col-span-6 flex gap-x-3 mt-6">
                <div className="flex h-6 items-center">
                  <input
                    id="marketing"
                    name="marketing"
                    type="checkbox"
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-white/10 bg-white/5 text-red-600 focus:ring-red-600 focus:ring-offset-gray-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <p className="text-gray-400">Marketing</p>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="marketing-fee"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Marketing Fee(%) *
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="marketing-fee"
                    id="marketing-fee"
                    placeholder="e.g. 1"
                    autoComplete="marketing-fee"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="marketing-wallet"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Marketing Wallet *
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="marketing-wallet"
                    id="marketing-wallet"
                    autoComplete="marketing-wallet"
                    placeholder="e.g. 0x0000000000000...ad"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* reward */}
              <div className="border-b border-white/10 pb-12 col-span-full" />
              <div className="sm:col-span-6 flex gap-x-3 mt-6">
                <div className="flex h-6 items-center">
                  <input
                    id="reward"
                    name="reward"
                    type="checkbox"
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-white/10 bg-white/5 text-red-600 focus:ring-red-600 focus:ring-offset-gray-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <p className="text-gray-400">Reward</p>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="reward-token"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Reward Token(%) *
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="reward-token"
                    id="reward-token"
                    placeholder="contract address of the reward token"
                    autoComplete="reward-token"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="reward-fee"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Reward Fee *
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="reward-fee"
                    id="reward-fee"
                    autoComplete="reward-fee"
                    placeholder="e.g. 1"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* anti-bot */}
              <div className="border-b border-white/10 pb-12 col-span-full" />
              <div className="sm:col-span-6 flex gap-x-3 mt-6">
                <div className="flex h-6 items-center">
                  <input
                    id="anti-bot"
                    name="anti-bot"
                    type="checkbox"
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-white/10 bg-white/5 text-red-600 focus:ring-red-600 focus:ring-offset-gray-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <p className="text-gray-400">Implement anti-bot system ?</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-white  border border-white px-3 py-2 rounded-md "
          >
            Create Token
          </button>
          <button
            type="submit"
            className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Deploy Token
          </button>
        </div>
      </form>
    </div>
  );
}
