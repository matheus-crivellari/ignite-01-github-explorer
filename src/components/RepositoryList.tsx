import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";

export interface Repository {
    id: string;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const url = 'https://api.github.com/orgs/facebook/repos';

    const [repositories, setRepositories] = useState<Repository[]>([]);

    // importante chamar useEffect com um segundo parametro (array vazio
    // significa que nao estamos observando a mudança de nenhum estado)
    // entao ela será executada apenas na construcao do componente,
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, []);

    console.log('repositories', repositories);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repo => <RepositoryItem key={repo.id} repository={repo} />)}
            </ul>
        </section>
    )
}