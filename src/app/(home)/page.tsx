import { titleFont } from "@/config/fonts";
import { createClientServer } from "@/utils/supabase/server";

export default async function Home() {

  const supabase = createClientServer()

  const { data: generos } = await supabase.from('generos').select('id, gender')
  const { data: categorias } = await supabase.from('categoriasTalampaya').select()
  const { data: parejas } = await supabase.from('parejas').select()


  return (
    <div className="">
      <h1>hola mundo</h1>
      <h1 className={`${titleFont.className} font-bold`}>hola mundo</h1>
      <pre> {JSON.stringify(parejas, null, 2)}</pre>
    </div>
  );
}
