import { Repository } from "./RepositoryList";

interface RepositoryItemProps {
    repository: Repository;
}

export function RepositoryItem(props: RepositoryItemProps) {
    const { repository } = props;

    return (
        <li>
            <strong>{repository?.name ?? 'Repo name'}</strong>
            <p>{repository?.description ?? 'Repo description...'}</p>

            <a href={repository?.html_url ?? ''} target="_blank">
                Acessar repositório
            </a>
        </li>
    )
}