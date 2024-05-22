    <div className="bg-neutralSilver">
      <div className="max-w-7xl p-2 mx-auto min-h-screen h-screen ">
        <Carousel className="w-full mx-auto">
          <div className="flex  px-4 flex-col-reverse md:flex-row justify-between gap-12 items-center">
            <div className="flex flex-col gap-12 md:w-1/2">
              <h1 className="text-4xl sm:text-5xl text-neutralDGray font-semibold md:w-3/4 leading-snug">
                <span className="text-brandPrimary">Tchamp</span> Communications
                Agency
              </h1>
              <p className="text-base text-neutralGray">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                maxime illum iste repellat hic possimus impedit ut beatae fuga
                porro, recusandae quis dolorem odio veritatis modi, corporis
                ipsam vel suscipit.
              </p>
              <div className="flex gap-5">
                <button className="btn-primary">Learn more</button>
                <button className="btn-primary">Contact</button>
              </div>
            </div>
            <div className="md:w-1/2 h-full">
              <Image
                src={"/banner.png"}
                alt=""
                width={500}
                height={300}
                objectFit="fill"
              />
            </div>
          </div>
          

        </Carousel>
      </div>
    </div>