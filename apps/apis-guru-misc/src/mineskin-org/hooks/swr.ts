import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGenerateKey() {
  return ['generate'] as const
}

export function getGetKey() {
  return ['get'] as const
}

export function getValidateKey() {
  return ['validate'] as const
}

export function getPostGenerateUploadKey() {
  return ['generate', '/generate/upload', 'POST'] as const
}

export function usePostGenerateUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate.upload.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.generate.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGenerateUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.generate.upload.$post> }) =>
        parseResponse(client.generate.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGenerateUrlKey() {
  return ['generate', '/generate/url', 'POST'] as const
}

export function usePostGenerateUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate.url.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.generate.url.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGenerateUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.generate.url.$post> }) =>
        parseResponse(client.generate.url.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGenerateUserKey() {
  return ['generate', '/generate/user', 'POST'] as const
}

export function usePostGenerateUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate.user.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.generate.user.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGenerateUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.generate.user.$post> }) =>
        parseResponse(client.generate.user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetDelayKey(args: InferRequestType<typeof client.get.delay.$get>) {
  const { header: _, ...keyArgs } = args
  return ['get', '/get/delay', keyArgs] as const
}

export function useGetGetDelay<TError = unknown>(
  args: InferRequestType<typeof client.get.delay.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.delay.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetDelayKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.delay.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get.delay.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetDelay<TError = unknown>(
  args: InferRequestType<typeof client.get.delay.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.delay.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetDelayKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.delay.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get.delay.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetIdIdKey(args: InferRequestType<(typeof client.get.id)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['get', '/get/id/:id', keyArgs] as const
}

export function useGetGetIdId<TError = unknown>(
  args: InferRequestType<(typeof client.get.id)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.id)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetIdIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.id)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get.id[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetIdId<TError = unknown>(
  args: InferRequestType<(typeof client.get.id)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.id)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetIdIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.id)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get.id[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetListPageKey(
  args: InferRequestType<(typeof client.get.list)[':page']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['get', '/get/list/:page', keyArgs] as const
}

export function useGetGetListPage<TError = unknown>(
  args: InferRequestType<(typeof client.get.list)[':page']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.get.list)[':page']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGetListPageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.get.list)[':page']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get.list[':page'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetListPage<TError = unknown>(
  args: InferRequestType<(typeof client.get.list)[':page']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.get.list)[':page']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGetListPageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.get.list)[':page']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get.list[':page'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetUuidUuidKey(
  args: InferRequestType<(typeof client.get.uuid)[':uuid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['get', '/get/uuid/:uuid', keyArgs] as const
}

export function useGetGetUuidUuid<TError = unknown>(
  args: InferRequestType<(typeof client.get.uuid)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.get.uuid)[':uuid']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGetUuidUuidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.get.uuid)[':uuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get.uuid[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetUuidUuid<TError = unknown>(
  args: InferRequestType<(typeof client.get.uuid)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.get.uuid)[':uuid']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGetUuidUuidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.get.uuid)[':uuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get.uuid[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetValidateNameNameKey(
  args: InferRequestType<(typeof client.validate.name)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['validate', '/validate/name/:name', keyArgs] as const
}

export function useGetValidateNameName<TError = unknown>(
  args: InferRequestType<(typeof client.validate.name)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.validate.name)[':name']['$get']>>>
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
        ? getGetValidateNameNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.validate.name)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.validate.name[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetValidateNameName<TError = unknown>(
  args: InferRequestType<(typeof client.validate.name)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.validate.name)[':name']['$get']>>>
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
        ? getGetValidateNameNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.validate.name)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.validate.name[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetValidateUuidUuidKey(
  args: InferRequestType<(typeof client.validate.uuid)[':uuid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['validate', '/validate/uuid/:uuid', keyArgs] as const
}

export function useGetValidateUuidUuid<TError = unknown>(
  args: InferRequestType<(typeof client.validate.uuid)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.validate.uuid)[':uuid']['$get']>>>
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
        ? getGetValidateUuidUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.validate.uuid)[':uuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.validate.uuid[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetValidateUuidUuid<TError = unknown>(
  args: InferRequestType<(typeof client.validate.uuid)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.validate.uuid)[':uuid']['$get']>>>
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
        ? getGetValidateUuidUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.validate.uuid)[':uuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.validate.uuid[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
