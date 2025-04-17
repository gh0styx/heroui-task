import { Button } from "@heroui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
} from "@heroui/table";

import { Meme } from "@/data/memes";

interface MemeTableProps {
  memes: Meme[];
  onEdit: (meme: Meme) => void;
}

export default function MemeTable({ memes, onEdit }: MemeTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Likes</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {memes.map((meme) => (
          <TableRow key={meme.id}>
            <TableCell>{meme.id}</TableCell>
            <TableCell>{meme.title}</TableCell>
            <TableCell>{meme.likes}</TableCell>
            <TableCell>
              <Button color="default" onPress={() => onEdit(meme)}>
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
