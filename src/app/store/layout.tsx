import MainLayout from "@/components/mainLayout";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <section>
        <MainLayout>
            {children}
        </MainLayout>
    </section>)
  }