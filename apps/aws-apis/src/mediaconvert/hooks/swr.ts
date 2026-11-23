import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2017_08_29Key() {
  return ['2017-08-29'] as const
}

export function getPost20170829CertificatesKey() {
  return ['2017-08-29', '/2017-08-29/certificates', 'POST'] as const
}

export function usePost20170829Certificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['certificates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['certificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20170829CertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2017-08-29']['certificates']['$post']> },
      ) => parseResponse(client['2017-08-29'].certificates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20170829JobsIdKey(
  args: InferRequestType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/jobs/:id', keyArgs] as const
}

export function useGet20170829JobsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet20170829JobsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20170829JobsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet20170829JobsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete20170829JobsIdKey() {
  return ['2017-08-29', '/2017-08-29/jobs/:id', 'DELETE'] as const
}

export function useDelete20170829JobsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['jobs'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['jobs'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20170829JobsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2017-08-29']['jobs'][':id']['$delete']> },
      ) => parseResponse(client['2017-08-29'].jobs[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20170829JobsKey(
  args: InferRequestType<(typeof client)['2017-08-29']['jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/jobs', keyArgs] as const
}

export function useGet20170829Jobs<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['jobs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet20170829JobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['jobs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20170829Jobs<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['jobs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet20170829JobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['jobs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20170829JobsKey() {
  return ['2017-08-29', '/2017-08-29/jobs', 'POST'] as const
}

export function usePost20170829Jobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['jobs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['jobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20170829JobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2017-08-29']['jobs']['$post']> },
      ) => parseResponse(client['2017-08-29'].jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20170829JobTemplatesKey(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/jobTemplates', keyArgs] as const
}

export function useGet20170829JobTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates']['$get']>>
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
        ? getGet20170829JobTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].jobTemplates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20170829JobTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates']['$get']>>
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
        ? getGet20170829JobTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].jobTemplates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20170829JobTemplatesKey() {
  return ['2017-08-29', '/2017-08-29/jobTemplates', 'POST'] as const
}

export function usePost20170829JobTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['jobTemplates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20170829JobTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2017-08-29']['jobTemplates']['$post']> },
      ) => parseResponse(client['2017-08-29'].jobTemplates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20170829PresetsKey(
  args: InferRequestType<(typeof client)['2017-08-29']['presets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/presets', keyArgs] as const
}

export function useGet20170829Presets<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['presets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['presets']['$get']>>
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
        ? getGet20170829PresetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['presets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].presets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20170829Presets<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['presets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['presets']['$get']>>
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
        ? getGet20170829PresetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['presets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].presets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20170829PresetsKey() {
  return ['2017-08-29', '/2017-08-29/presets', 'POST'] as const
}

export function usePost20170829Presets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['presets']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['presets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20170829PresetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2017-08-29']['presets']['$post']> },
      ) => parseResponse(client['2017-08-29'].presets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20170829QueuesKey(
  args: InferRequestType<(typeof client)['2017-08-29']['queues']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/queues', keyArgs] as const
}

export function useGet20170829Queues<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['queues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['queues']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet20170829QueuesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['queues']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].queues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20170829Queues<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['queues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['queues']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet20170829QueuesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['queues']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].queues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20170829QueuesKey() {
  return ['2017-08-29', '/2017-08-29/queues', 'POST'] as const
}

export function usePost20170829Queues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['queues']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['queues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20170829QueuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2017-08-29']['queues']['$post']> },
      ) => parseResponse(client['2017-08-29'].queues.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20170829JobTemplatesNameKey(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/jobTemplates/:name', keyArgs] as const
}

export function useGet20170829JobTemplatesName<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>>
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
        ? getGet20170829JobTemplatesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2017-08-29'].jobTemplates[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20170829JobTemplatesName<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>>
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
        ? getGet20170829JobTemplatesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2017-08-29'].jobTemplates[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut20170829JobTemplatesNameKey() {
  return ['2017-08-29', '/2017-08-29/jobTemplates/:name', 'PUT'] as const
}

export function usePut20170829JobTemplatesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20170829JobTemplatesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$put']>
        },
      ) => parseResponse(client['2017-08-29'].jobTemplates[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20170829JobTemplatesNameKey() {
  return ['2017-08-29', '/2017-08-29/jobTemplates/:name', 'DELETE'] as const
}

export function useDelete20170829JobTemplatesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20170829JobTemplatesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$delete']>
        },
      ) => parseResponse(client['2017-08-29'].jobTemplates[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20170829PolicyKey(
  args: InferRequestType<(typeof client)['2017-08-29']['policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/policy', keyArgs] as const
}

export function useGet20170829Policy<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['policy']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet20170829PolicyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['policy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].policy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20170829Policy<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['policy']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet20170829PolicyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['policy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].policy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut20170829PolicyKey() {
  return ['2017-08-29', '/2017-08-29/policy', 'PUT'] as const
}

export function usePut20170829Policy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['policy']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['policy']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20170829PolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2017-08-29']['policy']['$put']> },
      ) => parseResponse(client['2017-08-29'].policy.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20170829PolicyKey() {
  return ['2017-08-29', '/2017-08-29/policy', 'DELETE'] as const
}

export function useDelete20170829Policy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['policy']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['policy']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20170829PolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2017-08-29']['policy']['$delete']> },
      ) => parseResponse(client['2017-08-29'].policy.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20170829PresetsNameKey(
  args: InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/presets/:name', keyArgs] as const
}

export function useGet20170829PresetsName<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['presets'][':name']['$get']>>
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
        ? getGet20170829PresetsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['presets'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].presets[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20170829PresetsName<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['presets'][':name']['$get']>>
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
        ? getGet20170829PresetsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['presets'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].presets[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut20170829PresetsNameKey() {
  return ['2017-08-29', '/2017-08-29/presets/:name', 'PUT'] as const
}

export function usePut20170829PresetsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['presets'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20170829PresetsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$put']> },
      ) => parseResponse(client['2017-08-29'].presets[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20170829PresetsNameKey() {
  return ['2017-08-29', '/2017-08-29/presets/:name', 'DELETE'] as const
}

export function useDelete20170829PresetsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['presets'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20170829PresetsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$delete']> },
      ) => parseResponse(client['2017-08-29'].presets[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20170829QueuesNameKey(
  args: InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/queues/:name', keyArgs] as const
}

export function useGet20170829QueuesName<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['queues'][':name']['$get']>>
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
        ? getGet20170829QueuesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['queues'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].queues[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20170829QueuesName<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['queues'][':name']['$get']>>
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
        ? getGet20170829QueuesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['queues'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].queues[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut20170829QueuesNameKey() {
  return ['2017-08-29', '/2017-08-29/queues/:name', 'PUT'] as const
}

export function usePut20170829QueuesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['queues'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20170829QueuesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$put']> },
      ) => parseResponse(client['2017-08-29'].queues[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20170829QueuesNameKey() {
  return ['2017-08-29', '/2017-08-29/queues/:name', 'DELETE'] as const
}

export function useDelete20170829QueuesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['queues'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20170829QueuesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$delete']> },
      ) => parseResponse(client['2017-08-29'].queues[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20170829EndpointsKey() {
  return ['2017-08-29', '/2017-08-29/endpoints', 'POST'] as const
}

export function usePost20170829Endpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['endpoints']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['endpoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20170829EndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2017-08-29']['endpoints']['$post']> },
      ) => parseResponse(client['2017-08-29'].endpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20170829CertificatesArnKey() {
  return ['2017-08-29', '/2017-08-29/certificates/:arn', 'DELETE'] as const
}

export function useDelete20170829CertificatesArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['certificates'][':arn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['certificates'][':arn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20170829CertificatesArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2017-08-29']['certificates'][':arn']['$delete']>
        },
      ) => parseResponse(client['2017-08-29'].certificates[':arn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20170829TagsArnKey(
  args: InferRequestType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/tags/:arn', keyArgs] as const
}

export function useGet20170829TagsArn<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>>
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
        ? getGet20170829TagsArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].tags[':arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20170829TagsArn<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>>
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
        ? getGet20170829TagsArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-08-29'].tags[':arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut20170829TagsArnKey() {
  return ['2017-08-29', '/2017-08-29/tags/:arn', 'PUT'] as const
}

export function usePut20170829TagsArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['tags'][':arn']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['tags'][':arn']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20170829TagsArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2017-08-29']['tags'][':arn']['$put']> },
      ) => parseResponse(client['2017-08-29'].tags[':arn'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20170829TagsKey() {
  return ['2017-08-29', '/2017-08-29/tags', 'POST'] as const
}

export function usePost20170829Tags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['tags']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-08-29']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20170829TagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2017-08-29']['tags']['$post']> },
      ) => parseResponse(client['2017-08-29'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
