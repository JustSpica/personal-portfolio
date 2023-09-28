import Image from "next/image"

import { FavoriteLinks } from "@/app/home/components/Profile/FavoriteLinks"

export function Profile() {
  return (
    <section className="flex flex-col sm:flex-row sm:items-center">
      <Image
        className="-mt-4 rounded-full shadow-md outline outline-2 outline-zinc-50"
        width={96}
        height={96}
        src="https://github.com/justspica.png"
        alt="profile"
      />
      <div className="mt-4 flex w-full items-start justify-between sm:ml-4">
        <section className="flex flex-col items-start">
          <strong className="text-xl text-gray-800">
            Guilherme Spica Luiz
          </strong>
          <span className="text-sm text-gray-800">Front-end Developer</span>
        </section>

        <FavoriteLinks />
      </div>
    </section>
  )
}
