import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";



export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
      Passionate young programmer <br/> Crafting digital dreams with {""}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text text-transparent bg-gradient-to-r from-pink-700 from-30% via-orange-500 via-70% to-slate-50 xl:inline xs:block">
                          {/* Coment absolute left-0 top-[1px] bg-clip-text text-transparent bg-gradient-to-r from-pink-700 from-30% via-orange-500 via-70% to-slate-50 xl:inline xs:block*/}
            <span className="">Creatice code wizzard</span>
          </div>
          <div className="relative bg-clip-text text-transparent ">
            <span className="">Creatice code wizzard</span>
          </div>
        </div>
      </h2>
    
    </BackgroundBeamsWithCollision>
  );
}
