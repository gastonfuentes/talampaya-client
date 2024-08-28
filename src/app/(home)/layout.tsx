import { TopMenu } from "@/components";

export default function HomeLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-yellow-500">
            <TopMenu />
            {children}
        </main>
    );
}