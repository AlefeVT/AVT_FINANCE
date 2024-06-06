export async function sendMessage(formData: any) {
    const messageData = {
        embeds: [
            {
                title: 'Mensagem de Contato',
                color: 0x4983f5,
                fields: [
                    {
                        name: 'Nome',
                        value: formData.name,
                        inline: true,
                    },
                    {
                        name: 'Email',
                        value: formData.email,
                        inline: true,
                    },
                    {
                        name: 'Telefone',
                        value: formData.phone,
                        inline: true,
                    },
                    {
                        name: 'Mensagem',
                        value: formData.message,
                        inline: false,
                    },
                ],
            },
        ]
    };

    try {
        const response = await fetch("https://discord.com/api/webhooks/1247971514985222364/lkff3E9AjezN-E0n7yQy8N4MnFMjgz6lnN9OHIEZ9Ozzq_p4-U8UMUhcmU8EKFl37nVY", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData),
        });

        if (response.ok) {
            console.log('Mensagem enviada com sucesso!');
        } else {
            console.error('Falha ao enviar mensagem.');
        }
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
    }
}

export function scrollToStart(initialRef: React.RefObject<HTMLDivElement>) {
    if (initialRef.current) {
        initialRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
