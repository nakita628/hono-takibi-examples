import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVcsV1VCSServiceKey() {
  return ['vcs.v1.VCSService'] as const
}

export function getPostVcsV1VCSServiceGetCommitKey() {
  return ['vcs.v1.VCSService', '/vcs.v1.VCSService/GetCommit', 'POST'] as const
}

export function usePostVcsV1VCSServiceGetCommit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GetCommit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['vcs.v1.VCSService']['GetCommit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVcsV1VCSServiceGetCommitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['vcs.v1.VCSService']['GetCommit']['$post']> },
      ) => parseResponse(client['vcs.v1.VCSService'].GetCommit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVcsV1VCSServiceGetCommitsKey() {
  return ['vcs.v1.VCSService', '/vcs.v1.VCSService/GetCommits', 'POST'] as const
}

export function usePostVcsV1VCSServiceGetCommits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GetCommits']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['vcs.v1.VCSService']['GetCommits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVcsV1VCSServiceGetCommitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['vcs.v1.VCSService']['GetCommits']['$post']> },
      ) => parseResponse(client['vcs.v1.VCSService'].GetCommits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVcsV1VCSServiceGetFileKey() {
  return ['vcs.v1.VCSService', '/vcs.v1.VCSService/GetFile', 'POST'] as const
}

export function usePostVcsV1VCSServiceGetFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GetFile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['vcs.v1.VCSService']['GetFile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVcsV1VCSServiceGetFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['vcs.v1.VCSService']['GetFile']['$post']> },
      ) => parseResponse(client['vcs.v1.VCSService'].GetFile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVcsV1VCSServiceGithubAppKey() {
  return ['vcs.v1.VCSService', '/vcs.v1.VCSService/GithubApp', 'POST'] as const
}

export function usePostVcsV1VCSServiceGithubApp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GithubApp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubApp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVcsV1VCSServiceGithubAppKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubApp']['$post']> },
      ) => parseResponse(client['vcs.v1.VCSService'].GithubApp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVcsV1VCSServiceGithubLoginKey() {
  return ['vcs.v1.VCSService', '/vcs.v1.VCSService/GithubLogin', 'POST'] as const
}

export function usePostVcsV1VCSServiceGithubLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GithubLogin']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubLogin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVcsV1VCSServiceGithubLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubLogin']['$post']> },
      ) => parseResponse(client['vcs.v1.VCSService'].GithubLogin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVcsV1VCSServiceGithubRefreshKey() {
  return ['vcs.v1.VCSService', '/vcs.v1.VCSService/GithubRefresh', 'POST'] as const
}

export function usePostVcsV1VCSServiceGithubRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GithubRefresh']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubRefresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVcsV1VCSServiceGithubRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubRefresh']['$post']>
        },
      ) => parseResponse(client['vcs.v1.VCSService'].GithubRefresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
