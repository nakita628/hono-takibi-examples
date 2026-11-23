import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1NameGenerateAccessTokenMutationKey() {
  return ['v1', '/v1/:name:generateAccessToken', 'POST'] as const
}

export function getPostV1NameGenerateAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:generateAccessToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:generateAccessToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameGenerateAccessTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':name:generateAccessToken']['$post']>,
    ) {
      return parseResponse(client.v1[':name:generateAccessToken'].$post(args, options))
    },
  })
}

export function createPostV1NameGenerateAccessToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name:generateAccessToken']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:generateAccessToken']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NameGenerateAccessTokenMutationOptions<
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

export function getPostV1NameGenerateIdTokenMutationKey() {
  return ['v1', '/v1/:name:generateIdToken', 'POST'] as const
}

export function getPostV1NameGenerateIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:generateIdToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:generateIdToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameGenerateIdTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:generateIdToken']['$post']>) {
      return parseResponse(client.v1[':name:generateIdToken'].$post(args, options))
    },
  })
}

export function createPostV1NameGenerateIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name:generateIdToken']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:generateIdToken']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NameGenerateIdTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameSignBlobMutationKey() {
  return ['v1', '/v1/:name:signBlob', 'POST'] as const
}

export function getPostV1NameSignBlobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:signBlob']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:signBlob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameSignBlobMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:signBlob']['$post']>) {
      return parseResponse(client.v1[':name:signBlob'].$post(args, options))
    },
  })
}

export function createPostV1NameSignBlob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:signBlob']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:signBlob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NameSignBlobMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameSignJwtMutationKey() {
  return ['v1', '/v1/:name:signJwt', 'POST'] as const
}

export function getPostV1NameSignJwtMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:signJwt']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:signJwt']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameSignJwtMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:signJwt']['$post']>) {
      return parseResponse(client.v1[':name:signJwt'].$post(args, options))
    },
  })
}

export function createPostV1NameSignJwt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:signJwt']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:signJwt']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NameSignJwtMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
