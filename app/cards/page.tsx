import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { initialMemes } from "@/data/memes";
export default function CardsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {initialMemes.map((meme) => (
        <Card key={meme.id}>
          <Image alt={meme.title} src={meme.imageUrl} />
          <CardHeader>{meme.title}</CardHeader>
          <CardBody>Likes: {meme.likes}</CardBody>
          <CardFooter>
            <Link color="foreground" href={meme.imageUrl}>
              <Button>View</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
