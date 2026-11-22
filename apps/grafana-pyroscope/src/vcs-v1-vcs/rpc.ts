import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postVcsV1VCSServiceGetCommit(
  args: InferRequestType<(typeof client)['vcs.v1.VCSService']['GetCommit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vcs.v1.VCSService'].GetCommit.$post(args, options))
}

export async function postVcsV1VCSServiceGetCommits(
  args: InferRequestType<(typeof client)['vcs.v1.VCSService']['GetCommits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vcs.v1.VCSService'].GetCommits.$post(args, options))
}

export async function postVcsV1VCSServiceGetFile(
  args: InferRequestType<(typeof client)['vcs.v1.VCSService']['GetFile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vcs.v1.VCSService'].GetFile.$post(args, options))
}

export async function postVcsV1VCSServiceGithubApp(
  args: InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubApp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vcs.v1.VCSService'].GithubApp.$post(args, options))
}

export async function postVcsV1VCSServiceGithubLogin(
  args: InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubLogin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vcs.v1.VCSService'].GithubLogin.$post(args, options))
}

export async function postVcsV1VCSServiceGithubRefresh(
  args: InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubRefresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vcs.v1.VCSService'].GithubRefresh.$post(args, options))
}
