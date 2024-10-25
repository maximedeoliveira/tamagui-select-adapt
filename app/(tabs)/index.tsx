import { ExternalLink } from "@tamagui/lucide-icons";
import { Anchor, H2, Paragraph, Select, XStack, YStack } from "tamagui";
import { ToastControl } from "app/CurrentToast";
import { SelectDemo } from "components/Select";

export default function TabOneScreen() {
  return (
    <YStack f={1} ai="center" gap="$8" px="$10" pt="$5" bg="$background">
      <H2>Tamagui + Expo</H2>

      <SelectDemo />
    </YStack>
  );
}
