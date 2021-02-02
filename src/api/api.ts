import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
});



export const API = {
    findUsers(term: string): Promise<findUsersResponseType> {
        return instance.get(`search/users?q=${term}&per_page=100`).then(res => res.data);
    },

    getUser(user: string): Promise<singleUserType> {
        return instance.get(`users/${user}`).then(res => res.data);
    },

    getRepos(user: string): Promise<Array<repoType>> {
        return instance.get(`users/${user}/repos`).then(res => res.data);
    },
};


type findUsersResponseType = {
    items: Array<userSearchType>,

}

export type userSearchType = {
    login: string,
    id: number,
    node_id: string | null,
    avatar_url: string,
    gravatar_id: string | null,
    url: string | null,
    html_url: string | null,
    followers_url: string | null,
    following_url: string | null,
    gists_url: string | null,
    starred_url: string | null,
    subscriptions_url: string | null,
    organizations_url: string | null,
    repos_url: string | null,
    events_url: string | null,
    received_events_url: string | null,
    type: string | null,
    site_admin: boolean
}

export type singleUserType = {
    login: string,
    id: number,
    node_id: string | null,
    avatar_url: string,
    gravatar_id: string | null,
    url: string | null,
    html_url: string | null,
    followers_url: string | null,
    following_url: string | null,
    gists_url: string | null,
    starred_url: string | null,
    subscriptions_url: string | null,
    organizations_url: string | null,
    repos_url: string | null,
    events_url: string | null,
    received_events_url: string | null,
    type: string | null,
    site_admin: boolean
    name: string | null,
    company: string | null,
    blog: string | null,
    location: string | null,
    email: string | null,
    hireable: boolean,
    bio: string | null,
    twitter_username: string | null,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string | null
}

export type repoType = {
    id: number,
    node_id: string | null,
    name: string,
    full_name: string | null,
    private: boolean,
    owner: userSearchType,
    html_url: string,
    description: null | string,
    fork: boolean,
    url: string | null,
    forks_url: string | null,
    keys_url: string | null,
    collaborators_url: string | null,
    teams_url: string | null,
    hooks_url: string | null,
    issue_events_url: string | null,
    events_url: string | null,
    assignees_url: string | null,
    branches_url: string | null,
    tags_url: string | null,
    blobs_url: string | null,
    git_tags_url: string | null,
    git_refs_url: string | null,
    trees_url: string | null,
    statuses_url: string | null,
    languages_url: string | null,
    stargazers_url: string | null,
    contributors_url: string | null,
    subscribers_url: string | null,
    subscription_url: string | null,
    commits_url: string | null,
    git_commits_url: string | null,
    comments_url: string | null,
    issue_comment_url: string | null,
    contents_url: string | null,
    compare_url: string | null,
    merges_url: string | null,
    archive_url: string | null,
    downloads_url: string | null,
    issues_url: string | null,
    pulls_url: string | null,
    milestones_url: string | null,
    notifications_url: string | null,
    labels_url: string | null,
    releases_url: string | null,
    deployments_url: string | null,
    created_at: string | null,
    updated_at: string | null,
    pushed_at: string | null,
    git_url: string | null,
    ssh_url: string | null,
    clone_url: string,
    svn_url: string | null,
    homepage: boolean,
    size: number,
    stargazers_count: number,
    watchers_count: number,
    language: string | null,
    has_issues: boolean,
    has_projects: boolean,
    has_downloads: boolean,
    has_wiki: boolean,
    has_pages: boolean,
    forks_count: number,
    mirror_url: null | string,
    archived: boolean,
    disabled: boolean,
    open_issues_count: number,
    license: null | string,
    forks: number,
    open_issues: number,
    watchers: number,
    default_branch: null | string,
}