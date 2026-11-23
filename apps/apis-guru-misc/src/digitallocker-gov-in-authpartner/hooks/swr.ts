import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getSignupKey() {
  return ['signup'] as const
}

export function getStatisticsKey() {
  return ['statistics'] as const
}

export function getPostAccount1PushuriKey() {
  return ['account', '/account/1/pushuri', 'POST'] as const
}

export function usePostAccount1Pushuri<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['1']['pushuri']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['1']['pushuri']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccount1PushuriKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account)['1']['pushuri']['$post']> },
      ) => parseResponse(client.account['1'].pushuri.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccount2VerifyKey() {
  return ['account', '/account/2/verify', 'POST'] as const
}

export function usePostAccount2Verify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['2']['verify']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['2']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccount2VerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account)['2']['verify']['$post']> },
      ) => parseResponse(client.account['2'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauth21AuthorizeKey(
  args: InferRequestType<(typeof client.oauth2)['1']['authorize']['$get']>,
) {
  return ['oauth2', '/oauth2/1/authorize', args] as const
}

export function useGetOauth21Authorize<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)['1']['authorize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['authorize']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOauth21AuthorizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['authorize']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['1'].authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth21Authorize<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)['1']['authorize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['authorize']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOauth21AuthorizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['authorize']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['1'].authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauth21CodeKey() {
  return ['oauth2', '/oauth2/1/code', 'POST'] as const
}

export function usePostOauth21Code<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['code']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth2)['1']['code']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth21CodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.oauth2)['1']['code']['$post']> },
      ) => parseResponse(client.oauth2['1'].code.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth21FileUploadKey() {
  return ['oauth2', '/oauth2/1/file/upload', 'POST'] as const
}

export function usePostOauth21FileUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['1']['file']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth2)['1']['file']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth21FileUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.oauth2)['1']['file']['upload']['$post']> },
      ) => parseResponse(client.oauth2['1'].file.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauth21FileUriKey(
  args: InferRequestType<(typeof client.oauth2)['1']['file'][':uri']['$get']>,
) {
  return ['oauth2', '/oauth2/1/file/:uri', args] as const
}

export function useGetOauth21FileUri<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)['1']['file'][':uri']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['file'][':uri']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth21FileUriKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['file'][':uri']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['1'].file[':uri'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth21FileUri<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)['1']['file'][':uri']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['file'][':uri']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth21FileUriKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['file'][':uri']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['1'].file[':uri'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauth21FilesIndexKey() {
  return ['oauth2', '/oauth2/1/files/'] as const
}

export function useGetOauth21FilesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['1']['files']['index']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth21FilesIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['files']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['1'].files.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth21FilesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['1']['files']['index']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth21FilesIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['files']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['1'].files.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauth21FilesIssuedKey() {
  return ['oauth2', '/oauth2/1/files/issued'] as const
}

export function useGetOauth21FilesIssued<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['1']['files']['issued']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth21FilesIssuedKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['files']['issued']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['1'].files.issued.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth21FilesIssued<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['1']['files']['issued']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth21FilesIssuedKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['files']['issued']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['1'].files.issued.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauth21FilesIdKey(
  args: InferRequestType<(typeof client.oauth2)['1']['files'][':id']['$get']>,
) {
  return ['oauth2', '/oauth2/1/files/:id', args] as const
}

export function useGetOauth21FilesId<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)['1']['files'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['files'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth21FilesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['files'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['1'].files[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth21FilesId<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)['1']['files'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['files'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth21FilesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['files'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['1'].files[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauth21PullDoctypeKey() {
  return ['oauth2', '/oauth2/1/pull/doctype', 'POST'] as const
}

export function usePostOauth21PullDoctype<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['1']['pull']['doctype']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth2)['1']['pull']['doctype']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth21PullDoctypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.oauth2)['1']['pull']['doctype']['$post']> },
      ) => parseResponse(client.oauth2['1'].pull.doctype.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth21PullIssuersKey() {
  return ['oauth2', '/oauth2/1/pull/issuers', 'POST'] as const
}

export function usePostOauth21PullIssuers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['1']['pull']['issuers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth2)['1']['pull']['issuers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth21PullIssuersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.oauth2)['1']['pull']['issuers']['$post']> },
      ) => parseResponse(client.oauth2['1'].pull.issuers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth21PullParametersKey() {
  return ['oauth2', '/oauth2/1/pull/parameters', 'POST'] as const
}

export function usePostOauth21PullParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['1']['pull']['parameters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth2)['1']['pull']['parameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth21PullParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.oauth2)['1']['pull']['parameters']['$post']> },
      ) => parseResponse(client.oauth2['1'].pull.parameters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth21PullPulldocumentKey() {
  return ['oauth2', '/oauth2/1/pull/pulldocument', 'POST'] as const
}

export function usePostOauth21PullPulldocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['1']['pull']['pulldocument']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth2)['1']['pull']['pulldocument']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth21PullPulldocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.oauth2)['1']['pull']['pulldocument']['$post']> },
      ) => parseResponse(client.oauth2['1'].pull.pulldocument.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth21RevokeKey() {
  return ['oauth2', '/oauth2/1/revoke', 'POST'] as const
}

export function usePostOauth21Revoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['revoke']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth2)['1']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth21RevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.oauth2)['1']['revoke']['$post']> },
      ) => parseResponse(client.oauth2['1'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth21TokenKey() {
  return ['oauth2', '/oauth2/1/token', 'POST'] as const
}

export function usePostOauth21Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['token']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth2)['1']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth21TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.oauth2)['1']['token']['$post']> },
      ) => parseResponse(client.oauth2['1'].token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauth21UserKey() {
  return ['oauth2', '/oauth2/1/user'] as const
}

export function useGetOauth21User<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['user']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth21UserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['user']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['1'].user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth21User<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['user']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth21UserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['user']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['1'].user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauth21XmlUriKey(
  args: InferRequestType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>,
) {
  return ['oauth2', '/oauth2/1/xml/:uri', args] as const
}

export function useGetOauth21XmlUri<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth21XmlUriKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['1'].xml[':uri'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth21XmlUri<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth21XmlUriKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['1'].xml[':uri'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauth22FilesIssuedKey() {
  return ['oauth2', '/oauth2/2/files/issued'] as const
}

export function useGetOauth22FilesIssued<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['2']['files']['issued']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth22FilesIssuedKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['2']['files']['issued']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['2'].files.issued.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth22FilesIssued<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['2']['files']['issued']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth22FilesIssuedKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['2']['files']['issued']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['2'].files.issued.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauth22XmlEaadhaarKey() {
  return ['oauth2', '/oauth2/2/xml/eaadhaar'] as const
}

export function useGetOauth22XmlEaadhaar<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['2']['xml']['eaadhaar']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth22XmlEaadhaarKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['2']['xml']['eaadhaar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['2'].xml.eaadhaar.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth22XmlEaadhaar<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['2']['xml']['eaadhaar']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth22XmlEaadhaarKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['2']['xml']['eaadhaar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['2'].xml.eaadhaar.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSignup1DemoauthverifyKey() {
  return ['signup', '/signup/1/demoauthverify', 'POST'] as const
}

export function usePostSignup1Demoauthverify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.signup)['1']['demoauthverify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.signup)['1']['demoauthverify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignup1DemoauthverifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.signup)['1']['demoauthverify']['$post']> },
      ) => parseResponse(client.signup['1'].demoauthverify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignup2DemoauthKey() {
  return ['signup', '/signup/2/demoauth', 'POST'] as const
}

export function usePostSignup2Demoauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.signup)['2']['demoauth']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.signup)['2']['demoauth']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignup2DemoauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.signup)['2']['demoauth']['$post']> },
      ) => parseResponse(client.signup['2'].demoauth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStatistics1CountsKey() {
  return ['statistics', '/statistics/1/counts', 'POST'] as const
}

export function usePostStatistics1Counts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.statistics)['1']['counts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.statistics)['1']['counts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStatistics1CountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.statistics)['1']['counts']['$post']> },
      ) => parseResponse(client.statistics['1'].counts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
