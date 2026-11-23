import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVcsV1VCSServiceKey() {
  return ['vcs.v1.VCSService'] as const
}

export function getPostVcsV1VCSServiceGetCommitMutationKey() {
  return ['vcs.v1.VCSService', '/vcs.v1.VCSService/GetCommit', 'POST'] as const
}

export function getPostVcsV1VCSServiceGetCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GetCommit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['vcs.v1.VCSService']['GetCommit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVcsV1VCSServiceGetCommitMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['vcs.v1.VCSService']['GetCommit']['$post']>,
    ) {
      return parseResponse(client['vcs.v1.VCSService'].GetCommit.$post(args, options))
    },
  })
}

export function createPostVcsV1VCSServiceGetCommit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GetCommit']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['vcs.v1.VCSService']['GetCommit']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVcsV1VCSServiceGetCommitMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostVcsV1VCSServiceGetCommitsMutationKey() {
  return ['vcs.v1.VCSService', '/vcs.v1.VCSService/GetCommits', 'POST'] as const
}

export function getPostVcsV1VCSServiceGetCommitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GetCommits']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['vcs.v1.VCSService']['GetCommits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVcsV1VCSServiceGetCommitsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['vcs.v1.VCSService']['GetCommits']['$post']>,
    ) {
      return parseResponse(client['vcs.v1.VCSService'].GetCommits.$post(args, options))
    },
  })
}

export function createPostVcsV1VCSServiceGetCommits<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GetCommits']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['vcs.v1.VCSService']['GetCommits']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVcsV1VCSServiceGetCommitsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostVcsV1VCSServiceGetFileMutationKey() {
  return ['vcs.v1.VCSService', '/vcs.v1.VCSService/GetFile', 'POST'] as const
}

export function getPostVcsV1VCSServiceGetFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GetFile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['vcs.v1.VCSService']['GetFile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVcsV1VCSServiceGetFileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['vcs.v1.VCSService']['GetFile']['$post']>,
    ) {
      return parseResponse(client['vcs.v1.VCSService'].GetFile.$post(args, options))
    },
  })
}

export function createPostVcsV1VCSServiceGetFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GetFile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['vcs.v1.VCSService']['GetFile']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVcsV1VCSServiceGetFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostVcsV1VCSServiceGithubAppMutationKey() {
  return ['vcs.v1.VCSService', '/vcs.v1.VCSService/GithubApp', 'POST'] as const
}

export function getPostVcsV1VCSServiceGithubAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GithubApp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubApp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVcsV1VCSServiceGithubAppMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubApp']['$post']>,
    ) {
      return parseResponse(client['vcs.v1.VCSService'].GithubApp.$post(args, options))
    },
  })
}

export function createPostVcsV1VCSServiceGithubApp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GithubApp']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubApp']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVcsV1VCSServiceGithubAppMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostVcsV1VCSServiceGithubLoginMutationKey() {
  return ['vcs.v1.VCSService', '/vcs.v1.VCSService/GithubLogin', 'POST'] as const
}

export function getPostVcsV1VCSServiceGithubLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GithubLogin']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubLogin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVcsV1VCSServiceGithubLoginMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubLogin']['$post']>,
    ) {
      return parseResponse(client['vcs.v1.VCSService'].GithubLogin.$post(args, options))
    },
  })
}

export function createPostVcsV1VCSServiceGithubLogin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GithubLogin']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubLogin']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVcsV1VCSServiceGithubLoginMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostVcsV1VCSServiceGithubRefreshMutationKey() {
  return ['vcs.v1.VCSService', '/vcs.v1.VCSService/GithubRefresh', 'POST'] as const
}

export function getPostVcsV1VCSServiceGithubRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GithubRefresh']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubRefresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVcsV1VCSServiceGithubRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubRefresh']['$post']>,
    ) {
      return parseResponse(client['vcs.v1.VCSService'].GithubRefresh.$post(args, options))
    },
  })
}

export function createPostVcsV1VCSServiceGithubRefresh<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['vcs.v1.VCSService']['GithubRefresh']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['vcs.v1.VCSService']['GithubRefresh']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVcsV1VCSServiceGithubRefreshMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
