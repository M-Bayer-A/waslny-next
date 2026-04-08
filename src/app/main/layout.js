import AppBar from "@/features/main/components/AppBar";
import MainSideBar from "@/features/main/components/MainSideBar";
import { SidebarProvider } from "@/features/shared/components/ui/sidebar";

export default function MainLayout({ children }) {
  //
  const mainPageSections = [
    {
      title: "Home",
      url: "/main/home",
      icon: "GalleryVerticalEnd",
    },
    {
      title: "Trips",
      url: "/main/trips",
      icon: "Road",
    },
    {
      title: "Riders",
      url: "/main/riders",
      icon: "Users",
    },
    {
      title: "Drivers",
      url: "/main/drivers",
      icon: "KeySquare",
    },
    {
      title: "Coupons",
      url: "/main/coupons",
      icon: "BadgePercent",
    },

    {
      title: "Car models",
      url: "/main/carModels",
      icon: "CarFront",
    },
    {
      title: "Map",
      url: "/main/map",
      icon: "Map",
    },
    {
      title: "Settings",
      url: "/main/settings",
      icon: "Settings",
    },
  ];
  //
  return (
    <div className="h-screen w-screen flex flex-col">
      <AppBar />
      <SidebarProvider className={"grow"}>
        <MainSideBar sections={mainPageSections} />
        <main className="overflow-auto">{children}</main>
      </SidebarProvider>
    </div>
  );
}
