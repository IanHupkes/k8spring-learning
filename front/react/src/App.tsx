
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "src/components/ui/button";
import { motion } from "framer-motion";

// Define User type
interface User {
  id?: number;
  name: string;
  email: string;
}
export default function UsersApp() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);


    const fetchUsers = async (): Promise<void> => {
        try {
            const res = await fetch("/api/users");

            if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data: User[] = await res.json();
            setUsers(data);
        } catch (err) {
            console.error("Failed to fetch users", err);
        }
    };

    useEffect(() => {
        const load = async () => {
            await fetchUsers();
        };

        load();
    }, []);

    const addUser = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!name || !email) return;

        // const API_URL = import.meta.env.VITE_API_URL || "http://host.docker.internal:8080";

        setIsLoading(true);
        try {
            await fetch("/api/users", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
        });

        setName("");
        setEmail("");
        await fetchUsers();
        } catch (err) {
        console.error("Failed to add user", err);
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Users</h1>
    
        <div className="space-y-3">
            {users.map((user) => (
            <motion.div
                key={user.id ?? user.email}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Card className="rounded-2xl shadow">
                <CardContent className="p-4">
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                </CardContent>
                </Card>
            </motion.div>
            ))}
        </div>

        <form
            onSubmit={addUser}
            className="space-y-3 p-4 border rounded-2xl shadow-sm"
        >
            <h2 className="font-semibold">Add User </h2>

            <Input
            placeholder="Name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />

            <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Adding..." : "Add User"}
            </Button>
        </form>
        </div>
    );
}
