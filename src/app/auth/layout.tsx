
export default function AuthLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-gray-500">

            <div className="px-0 sm:px-10">
                {children}

            </div>
        </main>
    );
}