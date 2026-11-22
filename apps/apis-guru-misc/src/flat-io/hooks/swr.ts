import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getClassesKey() {
  return ['classes'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getScoresKey() {
  return ['scores'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getGetClassesKey(args: InferRequestType<typeof client.classes.$get>) {
  return ['classes', '/classes', args] as const
}

export function useGetClasses<TError = unknown>(
  args: InferRequestType<typeof client.classes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClassesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.classes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetClasses<TError = unknown>(
  args: InferRequestType<typeof client.classes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClassesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.classes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostClassesKey() {
  return ['classes', '/classes', 'POST'] as const
}

export function usePostClasses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.classes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.classes.$post> }) =>
        parseResponse(client.classes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClassesEnrollEnrollmentCodeKey() {
  return ['classes', '/classes/enroll/:enrollmentCode', 'POST'] as const
}

export function usePostClassesEnrollEnrollmentCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classes.enroll)[':enrollmentCode']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.classes.enroll)[':enrollmentCode']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassesEnrollEnrollmentCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.classes.enroll)[':enrollmentCode']['$post']> },
      ) => parseResponse(client.classes.enroll[':enrollmentCode'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClassesClassKey(
  args: InferRequestType<(typeof client.classes)[':class']['$get']>,
) {
  return ['classes', '/classes/:class', args] as const
}

export function useGetClassesClass<TError = unknown>(
  args: InferRequestType<(typeof client.classes)[':class']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.classes)[':class']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetClassesClassKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.classes)[':class']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classes[':class'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassesClass<TError = unknown>(
  args: InferRequestType<(typeof client.classes)[':class']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.classes)[':class']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetClassesClassKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.classes)[':class']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classes[':class'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutClassesClassKey() {
  return ['classes', '/classes/:class', 'PUT'] as const
}

export function usePutClassesClass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.classes)[':class']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.classes)[':class']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClassesClassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.classes)[':class']['$put']> },
      ) => parseResponse(client.classes[':class'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClassesClassActivateKey() {
  return ['classes', '/classes/:class/activate', 'POST'] as const
}

export function usePostClassesClassActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classes)[':class']['activate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.classes)[':class']['activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassesClassActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.classes)[':class']['activate']['$post']> },
      ) => parseResponse(client.classes[':class'].activate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClassesClassArchiveKey() {
  return ['classes', '/classes/:class/archive', 'POST'] as const
}

export function usePostClassesClassArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classes)[':class']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.classes)[':class']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassesClassArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.classes)[':class']['archive']['$post']> },
      ) => parseResponse(client.classes[':class'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteClassesClassArchiveKey() {
  return ['classes', '/classes/:class/archive', 'DELETE'] as const
}

export function useDeleteClassesClassArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classes)[':class']['archive']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.classes)[':class']['archive']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClassesClassArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.classes)[':class']['archive']['$delete']> },
      ) => parseResponse(client.classes[':class'].archive.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClassesClassAssignmentsKey(
  args: InferRequestType<(typeof client.classes)[':class']['assignments']['$get']>,
) {
  return ['classes', '/classes/:class/assignments', args] as const
}

export function useGetClassesClassAssignments<TError = unknown>(
  args: InferRequestType<(typeof client.classes)[':class']['assignments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classes)[':class']['assignments']['$get']>>
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
        ? getGetClassesClassAssignmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classes)[':class']['assignments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classes[':class'].assignments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassesClassAssignments<TError = unknown>(
  args: InferRequestType<(typeof client.classes)[':class']['assignments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classes)[':class']['assignments']['$get']>>
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
        ? getGetClassesClassAssignmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classes)[':class']['assignments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classes[':class'].assignments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClassesClassAssignmentsKey() {
  return ['classes', '/classes/:class/assignments', 'POST'] as const
}

export function usePostClassesClassAssignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classes)[':class']['assignments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.classes)[':class']['assignments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassesClassAssignmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.classes)[':class']['assignments']['$post']> },
      ) => parseResponse(client.classes[':class'].assignments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClassesClassAssignmentsAssignmentArchiveKey() {
  return ['classes', '/classes/:class/assignments/:assignment/archive', 'POST'] as const
}

export function usePostClassesClassAssignmentsAssignmentArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassesClassAssignmentsAssignmentArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteClassesClassAssignmentsAssignmentArchiveKey() {
  return ['classes', '/classes/:class/assignments/:assignment/archive', 'DELETE'] as const
}

export function useDeleteClassesClassAssignmentsAssignmentArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClassesClassAssignmentsAssignmentArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].archive.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostClassesClassAssignmentsAssignmentCopyKey() {
  return ['classes', '/classes/:class/assignments/:assignment/copy', 'POST'] as const
}

export function usePostClassesClassAssignmentsAssignmentCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['copy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['copy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassesClassAssignmentsAssignmentCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.classes)[':class']['assignments'][':assignment']['copy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].copy.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClassesClassAssignmentsAssignmentSubmissionsKey(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
  >,
) {
  return ['classes', '/classes/:class/assignments/:assignment/submissions', args] as const
}

export function useGetClassesClassAssignmentsAssignmentSubmissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
              >
            >
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
        ? getGetClassesClassAssignmentsAssignmentSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassesClassAssignmentsAssignmentSubmissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
              >
            >
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
        ? getGetClassesClassAssignmentsAssignmentSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutClassesClassAssignmentsAssignmentSubmissionsKey() {
  return ['classes', '/classes/:class/assignments/:assignment/submissions', 'PUT'] as const
}

export function usePutClassesClassAssignmentsAssignmentSubmissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClassesClassAssignmentsAssignmentSubmissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClassesClassAssignmentsAssignmentSubmissionsCsvKey(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
  >,
) {
  return ['classes', '/classes/:class/assignments/:assignment/submissions/csv', args] as const
}

export function useGetClassesClassAssignmentsAssignmentSubmissionsCsv<TError = unknown>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
              >
            >
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
        ? getGetClassesClassAssignmentsAssignmentSubmissionsCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions.csv.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassesClassAssignmentsAssignmentSubmissionsCsv<TError = unknown>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
              >
            >
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
        ? getGetClassesClassAssignmentsAssignmentSubmissionsCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions.csv.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClassesClassAssignmentsAssignmentSubmissionsExcelKey(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
  >,
) {
  return ['classes', '/classes/:class/assignments/:assignment/submissions/excel', args] as const
}

export function useGetClassesClassAssignmentsAssignmentSubmissionsExcel<TError = unknown>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
              >
            >
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
        ? getGetClassesClassAssignmentsAssignmentSubmissionsExcelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions.excel.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassesClassAssignmentsAssignmentSubmissionsExcel<TError = unknown>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
              >
            >
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
        ? getGetClassesClassAssignmentsAssignmentSubmissionsExcelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions.excel.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClassesClassAssignmentsAssignmentSubmissionsSubmissionKey(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
  >,
) {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission',
    args,
  ] as const
}

export function useGetClassesClassAssignmentsAssignmentSubmissionsSubmission<TError = unknown>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
              >
            >
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
        ? getGetClassesClassAssignmentsAssignmentSubmissionsSubmissionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions[':submission'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassesClassAssignmentsAssignmentSubmissionsSubmission<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
              >
            >
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
        ? getGetClassesClassAssignmentsAssignmentSubmissionsSubmissionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions[':submission'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutClassesClassAssignmentsAssignmentSubmissionsSubmissionKey() {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission',
    'PUT',
  ] as const
}

export function usePutClassesClassAssignmentsAssignmentSubmissionsSubmission<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClassesClassAssignmentsAssignmentSubmissionsSubmissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$put']
          >
        },
      ) =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions[':submission'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteClassesClassAssignmentsAssignmentSubmissionsSubmissionKey() {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission',
    'DELETE',
  ] as const
}

export function useDeleteClassesClassAssignmentsAssignmentSubmissionsSubmission<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClassesClassAssignmentsAssignmentSubmissionsSubmissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions[':submission'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsKey(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
  >,
) {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission/comments',
    args,
  ] as const
}

export function useGetClassesClassAssignmentsAssignmentSubmissionsSubmissionComments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
              >
            >
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
        ? getGetClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions[
            ':submission'
          ].comments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassesClassAssignmentsAssignmentSubmissionsSubmissionComments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
              >
            >
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
        ? getGetClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions[
            ':submission'
          ].comments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsKey() {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission/comments',
    'POST',
  ] as const
}

export function usePostClassesClassAssignmentsAssignmentSubmissionsSubmissionComments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions[
            ':submission'
          ].comments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentKey() {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission/comments/:comment',
    'PUT',
  ] as const
}

export function usePutClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsComment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$put']
          >
        },
      ) =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions[':submission'].comments[
            ':comment'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentKey() {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission/comments/:comment',
    'DELETE',
  ] as const
}

export function useDeleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsComment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions[':submission'].comments[
            ':comment'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryKey(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
  >,
) {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission/history',
    args,
  ] as const
}

export function useGetClassesClassAssignmentsAssignmentSubmissionsSubmissionHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
              >
            >
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
        ? getGetClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions[
            ':submission'
          ].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassesClassAssignmentsAssignmentSubmissionsSubmissionHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
              >
            >
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
        ? getGetClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classes[':class'].assignments[':assignment'].submissions[
            ':submission'
          ].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClassesClassStudentsUserSubmissionsKey(
  args: InferRequestType<
    (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
  >,
) {
  return ['classes', '/classes/:class/students/:user/submissions', args] as const
}

export function useGetClassesClassStudentsUserSubmissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
              >
            >
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
        ? getGetClassesClassStudentsUserSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classes[':class'].students[':user'].submissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassesClassStudentsUserSubmissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
              >
            >
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
        ? getGetClassesClassStudentsUserSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classes[':class'].students[':user'].submissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutClassesClassUsersUserKey() {
  return ['classes', '/classes/:class/users/:user', 'PUT'] as const
}

export function usePutClassesClassUsersUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classes)[':class']['users'][':user']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.classes)[':class']['users'][':user']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClassesClassUsersUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.classes)[':class']['users'][':user']['$put']> },
      ) => parseResponse(client.classes[':class'].users[':user'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteClassesClassUsersUserKey() {
  return ['classes', '/classes/:class/users/:user', 'DELETE'] as const
}

export function useDeleteClassesClassUsersUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classes)[':class']['users'][':user']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.classes)[':class']['users'][':user']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClassesClassUsersUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.classes)[':class']['users'][':user']['$delete']>
        },
      ) => parseResponse(client.classes[':class'].users[':user'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsKey(args: InferRequestType<typeof client.collections.$get>) {
  return ['collections', '/collections', args] as const
}

export function useGetCollections<TError = unknown>(
  args: InferRequestType<typeof client.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollections<TError = unknown>(
  args: InferRequestType<typeof client.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsKey() {
  return ['collections', '/collections', 'POST'] as const
}

export function usePostCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.collections.$post> }) =>
        parseResponse(client.collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionKey(
  args: InferRequestType<(typeof client.collections)[':collection']['$get']>,
) {
  return ['collections', '/collections/:collection', args] as const
}

export function useGetCollectionsCollection<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection']['$get']>>
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
        ? getGetCollectionsCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collection'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollection<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection']['$get']>>
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
        ? getGetCollectionsCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collection'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCollectionsCollectionKey() {
  return ['collections', '/collections/:collection', 'PUT'] as const
}

export function usePutCollectionsCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCollectionsCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.collections)[':collection']['$put']> },
      ) => parseResponse(client.collections[':collection'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionKey() {
  return ['collections', '/collections/:collection', 'DELETE'] as const
}

export function useDeleteCollectionsCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.collections)[':collection']['$delete']> },
      ) => parseResponse(client.collections[':collection'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionScoresKey(
  args: InferRequestType<(typeof client.collections)[':collection']['scores']['$get']>,
) {
  return ['collections', '/collections/:collection/scores', args] as const
}

export function useGetCollectionsCollectionScores<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection']['scores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection']['scores']['$get']>>
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
        ? getGetCollectionsCollectionScoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection']['scores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collection'].scores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionScores<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection']['scores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection']['scores']['$get']>>
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
        ? getGetCollectionsCollectionScoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection']['scores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collection'].scores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCollectionsCollectionScoresScoreKey() {
  return ['collections', '/collections/:collection/scores/:score', 'PUT'] as const
}

export function usePutCollectionsCollectionScoresScore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.collections)[':collection']['scores'][':score']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection']['scores'][':score']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCollectionsCollectionScoresScoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.collections)[':collection']['scores'][':score']['$put']
          >
        },
      ) =>
        parseResponse(client.collections[':collection'].scores[':score'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionScoresScoreKey() {
  return ['collections', '/collections/:collection/scores/:score', 'DELETE'] as const
}

export function useDeleteCollectionsCollectionScoresScore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection']['scores'][':score']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection']['scores'][':score']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionScoresScoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.collections)[':collection']['scores'][':score']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection'].scores[':score'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionUntrashKey() {
  return ['collections', '/collections/:collection/untrash', 'POST'] as const
}

export function usePostCollectionsCollectionUntrash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection']['untrash']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection']['untrash']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionUntrashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.collections)[':collection']['untrash']['$post']>
        },
      ) => parseResponse(client.collections[':collection'].untrash.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupKey(
  args: InferRequestType<(typeof client.groups)[':group']['$get']>,
) {
  return ['groups', '/groups/:group', args] as const
}

export function useGetGroupsGroup<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGroupsGroupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroup<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGroupsGroupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsGroupScoresKey(
  args: InferRequestType<(typeof client.groups)[':group']['scores']['$get']>,
) {
  return ['groups', '/groups/:group/scores', args] as const
}

export function useGetGroupsGroupScores<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group']['scores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group']['scores']['$get']>>
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
        ? getGetGroupsGroupScoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group']['scores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group'].scores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupScores<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group']['scores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group']['scores']['$get']>>
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
        ? getGetGroupsGroupScoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group']['scores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group'].scores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsGroupUsersKey(
  args: InferRequestType<(typeof client.groups)[':group']['users']['$get']>,
) {
  return ['groups', '/groups/:group/users', args] as const
}

export function useGetGroupsGroupUsers<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group']['users']['$get']>>
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
        ? getGetGroupsGroupUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupUsers<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group']['users']['$get']>>
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
        ? getGetGroupsGroupUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeKey(args: InferRequestType<typeof client.me.$get>) {
  return ['me', '/me', args] as const
}

export function useGetMe<TError = unknown>(
  args: InferRequestType<typeof client.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(
  args: InferRequestType<typeof client.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetOrganizationsInvitationsKey(
  args: InferRequestType<typeof client.organizations.invitations.$get>,
) {
  return ['organizations', '/organizations/invitations', args] as const
}

export function useGetOrganizationsInvitations<TError = unknown>(
  args: InferRequestType<typeof client.organizations.invitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
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
        ? getGetOrganizationsInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsInvitations<TError = unknown>(
  args: InferRequestType<typeof client.organizations.invitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
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
        ? getGetOrganizationsInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsInvitationsKey() {
  return ['organizations', '/organizations/invitations', 'POST'] as const
}

export function usePostOrganizationsInvitations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organizations.invitations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsInvitationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organizations.invitations.$post> },
      ) => parseResponse(client.organizations.invitations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsInvitationsInvitationKey() {
  return ['organizations', '/organizations/invitations/:invitation', 'DELETE'] as const
}

export function useDeleteOrganizationsInvitationsInvitation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations.invitations)[':invitation']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organizations.invitations)[':invitation']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsInvitationsInvitationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organizations.invitations)[':invitation']['$delete']>
        },
      ) =>
        parseResponse(client.organizations.invitations[':invitation'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsLtiCredentialsKey() {
  return ['organizations', '/organizations/lti/credentials'] as const
}

export function useGetOrganizationsLtiCredentials<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organizations.lti.credentials.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsLtiCredentialsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organizations.lti.credentials.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations.lti.credentials.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsLtiCredentials<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organizations.lti.credentials.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsLtiCredentialsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organizations.lti.credentials.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations.lti.credentials.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsLtiCredentialsKey() {
  return ['organizations', '/organizations/lti/credentials', 'POST'] as const
}

export function usePostOrganizationsLtiCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organizations.lti.credentials.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organizations.lti.credentials.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsLtiCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organizations.lti.credentials.$post> },
      ) => parseResponse(client.organizations.lti.credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsLtiCredentialsCredentialsKey() {
  return ['organizations', '/organizations/lti/credentials/:credentials', 'DELETE'] as const
}

export function useDeleteOrganizationsLtiCredentialsCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations.lti.credentials)[':credentials']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organizations.lti.credentials)[':credentials']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsLtiCredentialsCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organizations.lti.credentials)[':credentials']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations.lti.credentials[':credentials'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsUsersKey(
  args: InferRequestType<typeof client.organizations.users.$get>,
) {
  return ['organizations', '/organizations/users', args] as const
}

export function useGetOrganizationsUsers<TError = unknown>(
  args: InferRequestType<typeof client.organizations.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.$get>>>
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
        ? getGetOrganizationsUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsUsers<TError = unknown>(
  args: InferRequestType<typeof client.organizations.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.$get>>>
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
        ? getGetOrganizationsUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsUsersKey() {
  return ['organizations', '/organizations/users', 'POST'] as const
}

export function usePostOrganizationsUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organizations.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organizations.users.$post> }) =>
        parseResponse(client.organizations.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsUsersCountKey(
  args: InferRequestType<typeof client.organizations.users.count.$get>,
) {
  return ['organizations', '/organizations/users/count', args] as const
}

export function useGetOrganizationsUsersCount<TError = unknown>(
  args: InferRequestType<typeof client.organizations.users.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.count.$get>>>
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
        ? getGetOrganizationsUsersCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.users.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsUsersCount<TError = unknown>(
  args: InferRequestType<typeof client.organizations.users.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.count.$get>>>
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
        ? getGetOrganizationsUsersCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.users.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsUsersUserKey() {
  return ['organizations', '/organizations/users/:user', 'PUT'] as const
}

export function usePutOrganizationsUsersUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations.users)[':user']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations.users)[':user']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsUsersUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organizations.users)[':user']['$put']> },
      ) => parseResponse(client.organizations.users[':user'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsUsersUserKey() {
  return ['organizations', '/organizations/users/:user', 'DELETE'] as const
}

export function useDeleteOrganizationsUsersUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations.users)[':user']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organizations.users)[':user']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsUsersUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organizations.users)[':user']['$delete']> },
      ) => parseResponse(client.organizations.users[':user'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScoresKey() {
  return ['scores', '/scores', 'POST'] as const
}

export function usePostScores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scores.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.scores.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.scores.$post> }) =>
        parseResponse(client.scores.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScoresScoreKey(
  args: InferRequestType<(typeof client.scores)[':score']['$get']>,
) {
  return ['scores', '/scores/:score', args] as const
}

export function useGetScoresScore<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetScoresScoreKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scores[':score'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScoresScore<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetScoresScoreKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scores[':score'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutScoresScoreKey() {
  return ['scores', '/scores/:score', 'PUT'] as const
}

export function usePutScoresScore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scores)[':score']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutScoresScoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.scores)[':score']['$put']> },
      ) => parseResponse(client.scores[':score'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteScoresScoreKey() {
  return ['scores', '/scores/:score', 'DELETE'] as const
}

export function useDeleteScoresScore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.scores)[':score']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScoresScoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.scores)[':score']['$delete']> },
      ) => parseResponse(client.scores[':score'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScoresScoreCollaboratorsKey(
  args: InferRequestType<(typeof client.scores)[':score']['collaborators']['$get']>,
) {
  return ['scores', '/scores/:score/collaborators', args] as const
}

export function useGetScoresScoreCollaborators<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['collaborators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['collaborators']['$get']>>
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
        ? getGetScoresScoreCollaboratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['collaborators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scores[':score'].collaborators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScoresScoreCollaborators<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['collaborators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['collaborators']['$get']>>
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
        ? getGetScoresScoreCollaboratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['collaborators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scores[':score'].collaborators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostScoresScoreCollaboratorsKey() {
  return ['scores', '/scores/:score/collaborators', 'POST'] as const
}

export function usePostScoresScoreCollaborators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['collaborators']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scores)[':score']['collaborators']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScoresScoreCollaboratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.scores)[':score']['collaborators']['$post']> },
      ) => parseResponse(client.scores[':score'].collaborators.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScoresScoreCollaboratorsCollaboratorKey(
  args: InferRequestType<
    (typeof client.scores)[':score']['collaborators'][':collaborator']['$get']
  >,
) {
  return ['scores', '/scores/:score/collaborators/:collaborator', args] as const
}

export function useGetScoresScoreCollaboratorsCollaborator<TError = unknown>(
  args: InferRequestType<
    (typeof client.scores)[':score']['collaborators'][':collaborator']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.scores)[':score']['collaborators'][':collaborator']['$get']>
            >
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
        ? getGetScoresScoreCollaboratorsCollaboratorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.scores)[':score']['collaborators'][':collaborator']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.scores[':score'].collaborators[':collaborator'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScoresScoreCollaboratorsCollaborator<TError = unknown>(
  args: InferRequestType<
    (typeof client.scores)[':score']['collaborators'][':collaborator']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.scores)[':score']['collaborators'][':collaborator']['$get']>
            >
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
        ? getGetScoresScoreCollaboratorsCollaboratorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.scores)[':score']['collaborators'][':collaborator']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.scores[':score'].collaborators[':collaborator'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteScoresScoreCollaboratorsCollaboratorKey() {
  return ['scores', '/scores/:score/collaborators/:collaborator', 'DELETE'] as const
}

export function useDeleteScoresScoreCollaboratorsCollaborator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scores)[':score']['collaborators'][':collaborator']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.scores)[':score']['collaborators'][':collaborator']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScoresScoreCollaboratorsCollaboratorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.scores)[':score']['collaborators'][':collaborator']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.scores[':score'].collaborators[':collaborator'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetScoresScoreCommentsKey(
  args: InferRequestType<(typeof client.scores)[':score']['comments']['$get']>,
) {
  return ['scores', '/scores/:score/comments', args] as const
}

export function useGetScoresScoreComments<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['comments']['$get']>>
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
        ? getGetScoresScoreCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scores[':score'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScoresScoreComments<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['comments']['$get']>>
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
        ? getGetScoresScoreCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scores[':score'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostScoresScoreCommentsKey() {
  return ['scores', '/scores/:score/comments', 'POST'] as const
}

export function usePostScoresScoreComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scores)[':score']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScoresScoreCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.scores)[':score']['comments']['$post']> },
      ) => parseResponse(client.scores[':score'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutScoresScoreCommentsCommentKey() {
  return ['scores', '/scores/:score/comments/:comment', 'PUT'] as const
}

export function usePutScoresScoreCommentsComment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['comments'][':comment']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scores)[':score']['comments'][':comment']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutScoresScoreCommentsCommentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.scores)[':score']['comments'][':comment']['$put']>
        },
      ) => parseResponse(client.scores[':score'].comments[':comment'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteScoresScoreCommentsCommentKey() {
  return ['scores', '/scores/:score/comments/:comment', 'DELETE'] as const
}

export function useDeleteScoresScoreCommentsComment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['comments'][':comment']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.scores)[':score']['comments'][':comment']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScoresScoreCommentsCommentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.scores)[':score']['comments'][':comment']['$delete']>
        },
      ) => parseResponse(client.scores[':score'].comments[':comment'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutScoresScoreCommentsCommentResolvedKey() {
  return ['scores', '/scores/:score/comments/:comment/resolved', 'PUT'] as const
}

export function usePutScoresScoreCommentsCommentResolved<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scores)[':score']['comments'][':comment']['resolved']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.scores)[':score']['comments'][':comment']['resolved']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutScoresScoreCommentsCommentResolvedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.scores)[':score']['comments'][':comment']['resolved']['$put']
          >
        },
      ) =>
        parseResponse(
          client.scores[':score'].comments[':comment'].resolved.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteScoresScoreCommentsCommentResolvedKey() {
  return ['scores', '/scores/:score/comments/:comment/resolved', 'DELETE'] as const
}

export function useDeleteScoresScoreCommentsCommentResolved<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scores)[':score']['comments'][':comment']['resolved']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.scores)[':score']['comments'][':comment']['resolved']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScoresScoreCommentsCommentResolvedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.scores)[':score']['comments'][':comment']['resolved']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.scores[':score'].comments[':comment'].resolved.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostScoresScoreForkKey() {
  return ['scores', '/scores/:score/fork', 'POST'] as const
}

export function usePostScoresScoreFork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['fork']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scores)[':score']['fork']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScoresScoreForkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.scores)[':score']['fork']['$post']> },
      ) => parseResponse(client.scores[':score'].fork.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScoresScoreRevisionsKey(
  args: InferRequestType<(typeof client.scores)[':score']['revisions']['$get']>,
) {
  return ['scores', '/scores/:score/revisions', args] as const
}

export function useGetScoresScoreRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['revisions']['$get']>>
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
        ? getGetScoresScoreRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scores[':score'].revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScoresScoreRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['revisions']['$get']>>
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
        ? getGetScoresScoreRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scores[':score'].revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostScoresScoreRevisionsKey() {
  return ['scores', '/scores/:score/revisions', 'POST'] as const
}

export function usePostScoresScoreRevisions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['revisions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scores)[':score']['revisions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScoresScoreRevisionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.scores)[':score']['revisions']['$post']> },
      ) => parseResponse(client.scores[':score'].revisions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScoresScoreRevisionsRevisionKey(
  args: InferRequestType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>,
) {
  return ['scores', '/scores/:score/revisions/:revision', args] as const
}

export function useGetScoresScoreRevisionsRevision<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>>
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
        ? getGetScoresScoreRevisionsRevisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.scores[':score'].revisions[':revision'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScoresScoreRevisionsRevision<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>>
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
        ? getGetScoresScoreRevisionsRevisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.scores[':score'].revisions[':revision'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScoresScoreRevisionsRevisionFormatKey(
  args: InferRequestType<
    (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
  >,
) {
  return ['scores', '/scores/:score/revisions/:revision/:format', args] as const
}

export function useGetScoresScoreRevisionsRevisionFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
              >
            >
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
        ? getGetScoresScoreRevisionsRevisionFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.scores[':score'].revisions[':revision'][':format'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScoresScoreRevisionsRevisionFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
              >
            >
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
        ? getGetScoresScoreRevisionsRevisionFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.scores[':score'].revisions[':revision'][':format'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetScoresScoreSubmissionsKey(
  args: InferRequestType<(typeof client.scores)[':score']['submissions']['$get']>,
) {
  return ['scores', '/scores/:score/submissions', args] as const
}

export function useGetScoresScoreSubmissions<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['submissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['submissions']['$get']>>
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
        ? getGetScoresScoreSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['submissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scores[':score'].submissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScoresScoreSubmissions<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['submissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['submissions']['$get']>>
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
        ? getGetScoresScoreSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['submissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scores[':score'].submissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScoresScoreTracksKey(
  args: InferRequestType<(typeof client.scores)[':score']['tracks']['$get']>,
) {
  return ['scores', '/scores/:score/tracks', args] as const
}

export function useGetScoresScoreTracks<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['tracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['tracks']['$get']>>
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
        ? getGetScoresScoreTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['tracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scores[':score'].tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScoresScoreTracks<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['tracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['tracks']['$get']>>
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
        ? getGetScoresScoreTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['tracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scores[':score'].tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostScoresScoreTracksKey() {
  return ['scores', '/scores/:score/tracks', 'POST'] as const
}

export function usePostScoresScoreTracks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['tracks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scores)[':score']['tracks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScoresScoreTracksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.scores)[':score']['tracks']['$post']> },
      ) => parseResponse(client.scores[':score'].tracks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScoresScoreTracksTrackKey(
  args: InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$get']>,
) {
  return ['scores', '/scores/:score/tracks/:track', args] as const
}

export function useGetScoresScoreTracksTrack<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$get']>>
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
        ? getGetScoresScoreTracksTrackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scores[':score'].tracks[':track'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScoresScoreTracksTrack<TError = unknown>(
  args: InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$get']>>
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
        ? getGetScoresScoreTracksTrackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scores[':score'].tracks[':track'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutScoresScoreTracksTrackKey() {
  return ['scores', '/scores/:score/tracks/:track', 'PUT'] as const
}

export function usePutScoresScoreTracksTrack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutScoresScoreTracksTrackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$put']> },
      ) => parseResponse(client.scores[':score'].tracks[':track'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteScoresScoreTracksTrackKey() {
  return ['scores', '/scores/:score/tracks/:track', 'DELETE'] as const
}

export function useDeleteScoresScoreTracksTrack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScoresScoreTracksTrackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$delete']>
        },
      ) => parseResponse(client.scores[':score'].tracks[':track'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScoresScoreUntrashKey() {
  return ['scores', '/scores/:score/untrash', 'POST'] as const
}

export function usePostScoresScoreUntrash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['untrash']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.scores)[':score']['untrash']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScoresScoreUntrashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.scores)[':score']['untrash']['$post']> },
      ) => parseResponse(client.scores[':score'].untrash.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserKey(args: InferRequestType<(typeof client.users)[':user']['$get']>) {
  return ['users', '/users/:user', args] as const
}

export function useGetUsersUser<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUser<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserLikesKey(
  args: InferRequestType<(typeof client.users)[':user']['likes']['$get']>,
) {
  return ['users', '/users/:user/likes', args] as const
}

export function useGetUsersUserLikes<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['likes']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserLikesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['likes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserLikes<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['likes']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserLikesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['likes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserScoresKey(
  args: InferRequestType<(typeof client.users)[':user']['scores']['$get']>,
) {
  return ['users', '/users/:user/scores', args] as const
}

export function useGetUsersUserScores<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user']['scores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user']['scores']['$get']>>
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
        ? getGetUsersUserScoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user']['scores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user'].scores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserScores<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user']['scores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user']['scores']['$get']>>
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
        ? getGetUsersUserScoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user']['scores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user'].scores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
