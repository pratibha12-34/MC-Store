import MainLayout from "@/components/mainLayout";
import {Footer} from "@/components"
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
        <Footer />
    </section>)
  }