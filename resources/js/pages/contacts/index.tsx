import { Button } from '@/components/ui/button';

import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Contacts',
        href: '/contacts',
    },
];

export default function Contacts() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Contacts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Contacts</h1>
                    <Button>
                        <Link href="/contacts/create" />
                        <Plus />
                        Add Contact
                    </Button>
                </div>
            </div>
        </AppLayout>
    );
}
