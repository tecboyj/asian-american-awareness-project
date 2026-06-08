import ReactMarkdown from "react-markdown"
import reviewMd from "./assets/review.md?raw"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function App() {
  return (
    <div className="flex items-center justify-center gap-4 p-4">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Jade City Review</CardTitle>
        </CardHeader>
        <CardContent>
          <ReactMarkdown>{reviewMd}</ReactMarkdown>
        </CardContent>
      </Card>
      <Card>
        <img
          src="asian-american-awareness-project/fonda-lee.jpg"
          alt="Fonda Lee"
          className="flex w-full max-w-sm"
        />
        <CardHeader>
          <CardTitle>Fonda Lee</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            To learn more about the author, click{" "}
            <a
              href="https://www.fondalee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              here
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
