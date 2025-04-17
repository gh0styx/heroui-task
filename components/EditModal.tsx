import { Input } from "@heroui/input";
import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";

import { Meme } from "@/data/memes";

interface EditMemeModalProps {
  meme: Meme;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedMeme: Meme) => void;
}

export default function EditMemeModal({
  meme,
  isOpen,
  onClose,
  onSave,
}: EditMemeModalProps) {
  const [title, setTitle] = useState(meme.title);
  const [imageUrl, setImageUrl] = useState(meme.imageUrl);
  const [likes, setLikes] = useState(String(meme.likes));

  const [titleError, setTitleError] = useState("");
  const [imageUrlError, setImageUrlError] = useState("");

  useEffect(() => {
    setTitle(meme.title);
    setImageUrl(meme.imageUrl);
    setLikes(String(meme.likes));
    setTitleError("");
    setImageUrlError("");
  }, [meme]);

  const isValidUrl = (str: string) => {
    try {
      const url = new URL(str);

      return /\.(jpg|jpeg)$/i.test(url.pathname);
    } catch {
      return false;
    }
  };

  const isValidTitle = (str: string) => str.trim().length >= 3;

  const handleSave = () => {
    let hasError = false;

    if (!isValidTitle(title)) {
      setTitleError("Title must be at least 3 characters long.");
      hasError = true;
    } else {
      setTitleError("");
    }

    if (!isValidUrl(imageUrl)) {
      setImageUrlError(
        "Image URL must be a valid image ending in .jpg/.png/.jpeg/.gif",
      );
      hasError = true;
    } else {
      setImageUrlError("");
    }

    if (hasError) return;

    onSave({
      ...meme,
      title,
      imageUrl,
      likes: Number(likes),
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={(open) => !open && onClose()}>
      <ModalContent>
        {(close: () => void) => (
          <>
            <ModalHeader>Edit Meme</ModalHeader>
            <ModalBody className="flex flex-col gap-4">
              <Input isReadOnly label="ID" value={String(meme.id)} />

              <Input
                required
                errorMessage={titleError}
                isInvalid={!!titleError}
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <Input
                required
                errorMessage={imageUrlError}
                isInvalid={!!imageUrlError}
                label="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />

              <Input
                required
                label="Likes"
                type="number"
                value={likes}
                onChange={(e) => setLikes(e.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <Button color="danger" variant="light" onPress={close}>
                Cancel
              </Button>
              <Button color="primary" onPress={handleSave}>
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
