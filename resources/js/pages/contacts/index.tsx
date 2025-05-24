import { Button } from '@/components/ui/button';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { EditIcon, Plus } from 'lucide-react';

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

// Define the interface for the contact object
interface Contact {
    id: number;
    name: string;
    email: string;
    mobile: string;
    address: string;
}

export default function Contacts({ contacts }: { contacts: Contact[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Contacts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Contacts</h1>
                    <Link href="/contacts/create" />
                    <Button>
                        <Plus className="h-4 w-4" />
                        Add Contact
                    </Button>
                </div>
                <div className="flex flex-col gap-4">
                    <Table>
                        <TableCaption>A list of your contacts.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Id</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Phone Number</TableHead>
                                <TableHead>Address</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {contacts.map((contact) => (
                                <TableRow>
                                    <TableCell className="font-medium">{contact.id}</TableCell>
                                    <TableCell>{contact.name}</TableCell>
                                    <TableCell>{contact.email}</TableCell>
                                    <TableCell>{contact.mobile}</TableCell>
                                    <TableCell>{contact.address}</TableCell>
                                    <Link href={`/contacts/${contact.id}/edit`}>
                                        <Button variant="outline">
                                            <EditIcon className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}
