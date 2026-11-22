import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAtsKey() {
  return ['ats'] as const
}

export function getGetAtsApplicantsKey(args: InferRequestType<typeof client.ats.applicants.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ats', '/ats/applicants', keyArgs] as const
}

export function useGetAtsApplicants<TError = unknown>(
  args: InferRequestType<typeof client.ats.applicants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAtsApplicantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ats.applicants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAtsApplicants<TError = unknown>(
  args: InferRequestType<typeof client.ats.applicants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAtsApplicantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ats.applicants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAtsApplicantsKey() {
  return ['ats', '/ats/applicants', 'POST'] as const
}

export function usePostAtsApplicants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ats.applicants.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAtsApplicantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ats.applicants.$post> }) =>
        parseResponse(client.ats.applicants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAtsApplicantsIdKey(
  args: InferRequestType<(typeof client.ats.applicants)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ats', '/ats/applicants/:id', keyArgs] as const
}

export function useGetAtsApplicantsId<TError = unknown>(
  args: InferRequestType<(typeof client.ats.applicants)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>>
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
        ? getGetAtsApplicantsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ats.applicants[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAtsApplicantsId<TError = unknown>(
  args: InferRequestType<(typeof client.ats.applicants)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>>
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
        ? getGetAtsApplicantsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ats.applicants[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAtsJobsKey(args: InferRequestType<typeof client.ats.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ats', '/ats/jobs', keyArgs] as const
}

export function useGetAtsJobs<TError = unknown>(
  args: InferRequestType<typeof client.ats.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAtsJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ats.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAtsJobs<TError = unknown>(
  args: InferRequestType<typeof client.ats.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAtsJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ats.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAtsJobsIdKey(
  args: InferRequestType<(typeof client.ats.jobs)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ats', '/ats/jobs/:id', keyArgs] as const
}

export function useGetAtsJobsId<TError = unknown>(
  args: InferRequestType<(typeof client.ats.jobs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAtsJobsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ats.jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAtsJobsId<TError = unknown>(
  args: InferRequestType<(typeof client.ats.jobs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAtsJobsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ats.jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
