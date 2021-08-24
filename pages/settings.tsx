import { useRouter } from "next/router";
import PageHeading from "@components/ui/PageHeading";
import PagePanel from "@components/ui/PagePanel";

import en from "@locales/en";
import fr from "@locales/fr";

const Settings = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <div className="flex items-center justify-between">
        <PageHeading title={t.SettingsPageTitle} />
      </div>
      <PagePanel>Settings Content</PagePanel>
    </>
  );
};

export default Settings;
