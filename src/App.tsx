import { FileVideo, Upload, Wand2 } from "lucide-react";

import { Header } from "@/components/header";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 flex p-6 gap-6">
          <div className="flex flex-col flex-1 gap-4">
            <div className="grid grid-rows-2 gap-4 flex-1">
              <Textarea
                className="resize-none p-5 leading-relaxed"
                placeholder="Inclua o prompt para a IA..."
              />
              <Textarea
                className="resize-none p-5 leading-relaxed"
                placeholder="Resultado gerado pela IA..."
                readOnly
              />
            </div>

            <p className="text-sm text-muted-foreground">
              Lembre-se: você pode utilizar a variável{" "}
              <code className="text-violet-400">{`{transcription}`}</code> no
              seu prompt para adicionar o conteúdo da transcrição do vídeo
              selecionado.
            </p>
          </div>
          <aside className="w-[285px] space-y-6">
            <form className="space-y-4">
              <label
                htmlFor="video"
                className="w-full border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/70 hover:text-black"
              >
                <FileVideo />
                Selecione um vídeo
              </label>

              <input
                type="file"
                id="video"
                accept="video/mp4"
                className="sr-only"
              />

              <Separator />

              <div className="space-y-1">
                <Label htmlFor="transcription_prompt">
                  Prompt de transcrição
                </Label>

                <Textarea
                  id="transcription_prompt"
                  className="min-h-20 leading-relaxed"
                  placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
                />
              </div>

              <Button type="submit" className="w-full">
                Carregar vídeo <Upload className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <Separator />

            <form className="space-y-4">
              <div className="space-y-1">
                <Label>Prompt</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um prompt..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">Titulo do YouTube</SelectItem>
                    <SelectItem value="description">
                      Descrição do YouTube
                    </SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-xs block text-muted-foreground italic">
                  Você poderá customizar esta opção em breve
                </span>
              </div>

              <div className="space-y-1">
                <Label>Modelo</Label>
                <Select defaultValue="gpt3.5" disabled>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-xs block text-muted-foreground italic">
                  Você poderá customizar esta opção em breve
                </span>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label>Temperatura</Label>

                <Slider min={0} max={1} step={0.1} />

                <span className="text-xs block text-muted-foreground italic leading-relaxed">
                  Valores mais altos tendem a deixar o resultado mais criativo e
                  com possíveis erros
                </span>
              </div>

              <Separator />

              <Button type="submit" className="w-full">
                Executar <Wand2 className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </aside>
        </main>
      </div>
    </ThemeProvider>
  );
}
