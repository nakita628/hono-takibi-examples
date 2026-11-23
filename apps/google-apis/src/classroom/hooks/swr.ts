import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1CoursesKey(args: InferRequestType<typeof client.v1.courses.$get>) {
  return ['v1', '/v1/courses', args] as const
}

export function useGetV1Courses<TError = unknown>(
  args: InferRequestType<typeof client.v1.courses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.courses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CoursesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.courses.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.courses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Courses<TError = unknown>(
  args: InferRequestType<typeof client.v1.courses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.courses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CoursesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.courses.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.courses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CoursesKey() {
  return ['v1', '/v1/courses', 'POST'] as const
}

export function usePostV1Courses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.courses.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.courses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CoursesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.courses.$post> }) =>
        parseResponse(client.v1.courses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdAliasesKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/aliases', args] as const
}

export function useGetV1CoursesCourseIdAliases<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>>
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
        ? getGetV1CoursesCourseIdAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.courses[':courseId'].aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdAliases<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>>
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
        ? getGetV1CoursesCourseIdAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.courses[':courseId'].aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CoursesCourseIdAliasesKey() {
  return ['v1', '/v1/courses/:courseId/aliases', 'POST'] as const
}

export function usePostV1CoursesCourseIdAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['aliases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['aliases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CoursesCourseIdAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.courses)[':courseId']['aliases']['$post']> },
      ) => parseResponse(client.v1.courses[':courseId'].aliases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CoursesCourseIdAliasesAliasKey() {
  return ['v1', '/v1/courses/:courseId/aliases/:alias', 'DELETE'] as const
}

export function useDeleteV1CoursesCourseIdAliasesAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['aliases'][':alias']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['aliases'][':alias']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CoursesCourseIdAliasesAliasKey()
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
            (typeof client.v1.courses)[':courseId']['aliases'][':alias']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.courses[':courseId'].aliases[':alias'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdAnnouncementsKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/announcements', args] as const
}

export function useGetV1CoursesCourseIdAnnouncements<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>>
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
        ? getGetV1CoursesCourseIdAnnouncementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.courses[':courseId'].announcements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdAnnouncements<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>>
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
        ? getGetV1CoursesCourseIdAnnouncementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.courses[':courseId'].announcements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CoursesCourseIdAnnouncementsKey() {
  return ['v1', '/v1/courses/:courseId/announcements', 'POST'] as const
}

export function usePostV1CoursesCourseIdAnnouncements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['announcements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CoursesCourseIdAnnouncementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements']['$post']>
        },
      ) => parseResponse(client.v1.courses[':courseId'].announcements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdAnnouncementsIdKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/announcements/:id', args] as const
}

export function useGetV1CoursesCourseIdAnnouncementsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>
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
        ? getGetV1CoursesCourseIdAnnouncementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.courses[':courseId'].announcements[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdAnnouncementsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>
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
        ? getGetV1CoursesCourseIdAnnouncementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.courses[':courseId'].announcements[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CoursesCourseIdAnnouncementsIdKey() {
  return ['v1', '/v1/courses/:courseId/announcements/:id', 'DELETE'] as const
}

export function useDeleteV1CoursesCourseIdAnnouncementsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CoursesCourseIdAnnouncementsIdKey()
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
            (typeof client.v1.courses)[':courseId']['announcements'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.courses[':courseId'].announcements[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1CoursesCourseIdAnnouncementsIdKey() {
  return ['v1', '/v1/courses/:courseId/announcements/:id', 'PATCH'] as const
}

export function usePatchV1CoursesCourseIdAnnouncementsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1CoursesCourseIdAnnouncementsIdKey()
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
            (typeof client.v1.courses)[':courseId']['announcements'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.courses[':courseId'].announcements[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CoursesCourseIdAnnouncementsIdModifyAssigneesKey() {
  return ['v1', '/v1/courses/:courseId/announcements/:id:modifyAssignees', 'POST'] as const
}

export function usePostV1CoursesCourseIdAnnouncementsIdModifyAssignees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['announcements'][':id:modifyAssignees']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['announcements'][':id:modifyAssignees']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CoursesCourseIdAnnouncementsIdModifyAssigneesKey()
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
            (typeof client.v1.courses)[':courseId']['announcements'][':id:modifyAssignees']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.courses[':courseId'].announcements[':id:modifyAssignees'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdCourseWorkKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/courseWork', args] as const
}

export function useGetV1CoursesCourseIdCourseWork<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>>
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
        ? getGetV1CoursesCourseIdCourseWorkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.courses[':courseId'].courseWork.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdCourseWork<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>>
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
        ? getGetV1CoursesCourseIdCourseWorkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.courses[':courseId'].courseWork.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CoursesCourseIdCourseWorkKey() {
  return ['v1', '/v1/courses/:courseId/courseWork', 'POST'] as const
}

export function usePostV1CoursesCourseIdCourseWork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CoursesCourseIdCourseWorkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork']['$post']>
        },
      ) => parseResponse(client.v1.courses[':courseId'].courseWork.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsKey(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
  >,
) {
  return ['v1', '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions', args] as const
}

export function useGetV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
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
        ? getGetV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsKey(args)
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
                (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
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
          client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
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
        ? getGetV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsKey(args)
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
                (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
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
          client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdKey(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id',
    args,
  ] as const
}

export function useGetV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
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
        ? getGetV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdKey(args)
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
                (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
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
          client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
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
        ? getGetV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdKey(args)
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
                (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
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
          client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdKey() {
  return [
    'v1',
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id',
    'PATCH',
  ] as const
}

export function usePatchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdKey()
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
            (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[
            ':id'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachmentsKey() {
  return [
    'v1',
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id:modifyAttachments',
    'POST',
  ] as const
}

export function usePostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:modifyAttachments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:modifyAttachments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachmentsKey()
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
            (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:modifyAttachments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[
            ':id:modifyAttachments'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaimKey() {
  return [
    'v1',
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id:reclaim',
    'POST',
  ] as const
}

export function usePostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaim<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:reclaim']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:reclaim']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaimKey()
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
            (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:reclaim']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[
            ':id:reclaim'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturnKey() {
  return [
    'v1',
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id:return',
    'POST',
  ] as const
}

export function usePostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:return']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:return']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturnKey()
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
            (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:return']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[
            ':id:return'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnInKey() {
  return [
    'v1',
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id:turnIn',
    'POST',
  ] as const
}

export function usePostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnIn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:turnIn']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:turnIn']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnInKey()
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
            (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:turnIn']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[
            ':id:turnIn'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdCourseWorkIdKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/courseWork/:id', args] as const
}

export function useGetV1CoursesCourseIdCourseWorkId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>
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
        ? getGetV1CoursesCourseIdCourseWorkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.courses[':courseId'].courseWork[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdCourseWorkId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>
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
        ? getGetV1CoursesCourseIdCourseWorkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.courses[':courseId'].courseWork[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CoursesCourseIdCourseWorkIdKey() {
  return ['v1', '/v1/courses/:courseId/courseWork/:id', 'DELETE'] as const
}

export function useDeleteV1CoursesCourseIdCourseWorkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CoursesCourseIdCourseWorkIdKey()
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
            (typeof client.v1.courses)[':courseId']['courseWork'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.courses[':courseId'].courseWork[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1CoursesCourseIdCourseWorkIdKey() {
  return ['v1', '/v1/courses/:courseId/courseWork/:id', 'PATCH'] as const
}

export function usePatchV1CoursesCourseIdCourseWorkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1CoursesCourseIdCourseWorkIdKey()
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
            (typeof client.v1.courses)[':courseId']['courseWork'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(client.v1.courses[':courseId'].courseWork[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CoursesCourseIdCourseWorkIdModifyAssigneesKey() {
  return ['v1', '/v1/courses/:courseId/courseWork/:id:modifyAssignees', 'POST'] as const
}

export function usePostV1CoursesCourseIdCourseWorkIdModifyAssignees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWork'][':id:modifyAssignees']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWork'][':id:modifyAssignees']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CoursesCourseIdCourseWorkIdModifyAssigneesKey()
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
            (typeof client.v1.courses)[':courseId']['courseWork'][':id:modifyAssignees']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.courses[':courseId'].courseWork[':id:modifyAssignees'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdCourseWorkMaterialsKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/courseWorkMaterials', args] as const
}

export function useGetV1CoursesCourseIdCourseWorkMaterials<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>
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
        ? getGetV1CoursesCourseIdCourseWorkMaterialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.courses[':courseId'].courseWorkMaterials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdCourseWorkMaterials<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>
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
        ? getGetV1CoursesCourseIdCourseWorkMaterialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.courses[':courseId'].courseWorkMaterials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CoursesCourseIdCourseWorkMaterialsKey() {
  return ['v1', '/v1/courses/:courseId/courseWorkMaterials', 'POST'] as const
}

export function usePostV1CoursesCourseIdCourseWorkMaterials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CoursesCourseIdCourseWorkMaterialsKey()
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
            (typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.courses[':courseId'].courseWorkMaterials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdCourseWorkMaterialsIdKey(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
  >,
) {
  return ['v1', '/v1/courses/:courseId/courseWorkMaterials/:id', args] as const
}

export function useGetV1CoursesCourseIdCourseWorkMaterialsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
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
        ? getGetV1CoursesCourseIdCourseWorkMaterialsIdKey(args)
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
                (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
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
          client.v1.courses[':courseId'].courseWorkMaterials[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdCourseWorkMaterialsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
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
        ? getGetV1CoursesCourseIdCourseWorkMaterialsIdKey(args)
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
                (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
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
          client.v1.courses[':courseId'].courseWorkMaterials[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CoursesCourseIdCourseWorkMaterialsIdKey() {
  return ['v1', '/v1/courses/:courseId/courseWorkMaterials/:id', 'DELETE'] as const
}

export function useDeleteV1CoursesCourseIdCourseWorkMaterialsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CoursesCourseIdCourseWorkMaterialsIdKey()
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
            (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.courses[':courseId'].courseWorkMaterials[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1CoursesCourseIdCourseWorkMaterialsIdKey() {
  return ['v1', '/v1/courses/:courseId/courseWorkMaterials/:id', 'PATCH'] as const
}

export function usePatchV1CoursesCourseIdCourseWorkMaterialsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1CoursesCourseIdCourseWorkMaterialsIdKey()
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
            (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.courses[':courseId'].courseWorkMaterials[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdStudentsKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/students', args] as const
}

export function useGetV1CoursesCourseIdStudents<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students']['$get']>>
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
        ? getGetV1CoursesCourseIdStudentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.courses[':courseId'].students.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdStudents<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students']['$get']>>
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
        ? getGetV1CoursesCourseIdStudentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.courses[':courseId'].students.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CoursesCourseIdStudentsKey() {
  return ['v1', '/v1/courses/:courseId/students', 'POST'] as const
}

export function usePostV1CoursesCourseIdStudents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['students']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CoursesCourseIdStudentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.courses)[':courseId']['students']['$post']> },
      ) => parseResponse(client.v1.courses[':courseId'].students.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdStudentsUserIdKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/students/:userId', args] as const
}

export function useGetV1CoursesCourseIdStudentsUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>
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
        ? getGetV1CoursesCourseIdStudentsUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.courses[':courseId'].students[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdStudentsUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>
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
        ? getGetV1CoursesCourseIdStudentsUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.courses[':courseId'].students[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CoursesCourseIdStudentsUserIdKey() {
  return ['v1', '/v1/courses/:courseId/students/:userId', 'DELETE'] as const
}

export function useDeleteV1CoursesCourseIdStudentsUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CoursesCourseIdStudentsUserIdKey()
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
            (typeof client.v1.courses)[':courseId']['students'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.courses[':courseId'].students[':userId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdTeachersKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/teachers', args] as const
}

export function useGetV1CoursesCourseIdTeachers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>>
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
        ? getGetV1CoursesCourseIdTeachersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.courses[':courseId'].teachers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdTeachers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>>
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
        ? getGetV1CoursesCourseIdTeachersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.courses[':courseId'].teachers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CoursesCourseIdTeachersKey() {
  return ['v1', '/v1/courses/:courseId/teachers', 'POST'] as const
}

export function usePostV1CoursesCourseIdTeachers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['teachers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CoursesCourseIdTeachersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers']['$post']> },
      ) => parseResponse(client.v1.courses[':courseId'].teachers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdTeachersUserIdKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/teachers/:userId', args] as const
}

export function useGetV1CoursesCourseIdTeachersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>
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
        ? getGetV1CoursesCourseIdTeachersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.courses[':courseId'].teachers[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdTeachersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>
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
        ? getGetV1CoursesCourseIdTeachersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.courses[':courseId'].teachers[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CoursesCourseIdTeachersUserIdKey() {
  return ['v1', '/v1/courses/:courseId/teachers/:userId', 'DELETE'] as const
}

export function useDeleteV1CoursesCourseIdTeachersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CoursesCourseIdTeachersUserIdKey()
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
            (typeof client.v1.courses)[':courseId']['teachers'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.courses[':courseId'].teachers[':userId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdTopicsKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/topics', args] as const
}

export function useGetV1CoursesCourseIdTopics<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics']['$get']>>
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
        ? getGetV1CoursesCourseIdTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.courses[':courseId'].topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdTopics<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics']['$get']>>
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
        ? getGetV1CoursesCourseIdTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.courses[':courseId'].topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CoursesCourseIdTopicsKey() {
  return ['v1', '/v1/courses/:courseId/topics', 'POST'] as const
}

export function usePostV1CoursesCourseIdTopics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['topics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CoursesCourseIdTopicsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.courses)[':courseId']['topics']['$post']> },
      ) => parseResponse(client.v1.courses[':courseId'].topics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesCourseIdTopicsIdKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/topics/:id', args] as const
}

export function useGetV1CoursesCourseIdTopicsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>>
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
        ? getGetV1CoursesCourseIdTopicsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.courses[':courseId'].topics[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesCourseIdTopicsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>>
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
        ? getGetV1CoursesCourseIdTopicsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.courses[':courseId'].topics[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CoursesCourseIdTopicsIdKey() {
  return ['v1', '/v1/courses/:courseId/topics/:id', 'DELETE'] as const
}

export function useDeleteV1CoursesCourseIdTopicsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CoursesCourseIdTopicsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$delete']>
        },
      ) => parseResponse(client.v1.courses[':courseId'].topics[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1CoursesCourseIdTopicsIdKey() {
  return ['v1', '/v1/courses/:courseId/topics/:id', 'PATCH'] as const
}

export function usePatchV1CoursesCourseIdTopicsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1CoursesCourseIdTopicsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$patch']>
        },
      ) => parseResponse(client.v1.courses[':courseId'].topics[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CoursesIdKey(
  args: InferRequestType<(typeof client.v1.courses)[':id']['$get']>,
) {
  return ['v1', '/v1/courses/:id', args] as const
}

export function useGetV1CoursesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1CoursesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.courses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CoursesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.courses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1CoursesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.courses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CoursesIdKey() {
  return ['v1', '/v1/courses/:id', 'PUT'] as const
}

export function usePutV1CoursesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CoursesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.courses)[':id']['$put']> },
      ) => parseResponse(client.v1.courses[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CoursesIdKey() {
  return ['v1', '/v1/courses/:id', 'DELETE'] as const
}

export function useDeleteV1CoursesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CoursesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.courses)[':id']['$delete']> },
      ) => parseResponse(client.v1.courses[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1CoursesIdKey() {
  return ['v1', '/v1/courses/:id', 'PATCH'] as const
}

export function usePatchV1CoursesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.courses)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1CoursesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.courses)[':id']['$patch']> },
      ) => parseResponse(client.v1.courses[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InvitationsKey(args: InferRequestType<typeof client.v1.invitations.$get>) {
  return ['v1', '/v1/invitations', args] as const
}

export function useGetV1Invitations<TError = unknown>(
  args: InferRequestType<typeof client.v1.invitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invitations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1InvitationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invitations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Invitations<TError = unknown>(
  args: InferRequestType<typeof client.v1.invitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invitations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1InvitationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invitations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InvitationsKey() {
  return ['v1', '/v1/invitations', 'POST'] as const
}

export function usePostV1Invitations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invitations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.invitations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvitationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.invitations.$post> }) =>
        parseResponse(client.v1.invitations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InvitationsIdKey(
  args: InferRequestType<(typeof client.v1.invitations)[':id']['$get']>,
) {
  return ['v1', '/v1/invitations/:id', args] as const
}

export function useGetV1InvitationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.invitations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invitations)[':id']['$get']>>>
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
        ? getGetV1InvitationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invitations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invitations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InvitationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.invitations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invitations)[':id']['$get']>>>
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
        ? getGetV1InvitationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invitations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invitations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1InvitationsIdKey() {
  return ['v1', '/v1/invitations/:id', 'DELETE'] as const
}

export function useDeleteV1InvitationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invitations)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invitations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1InvitationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.invitations)[':id']['$delete']> },
      ) => parseResponse(client.v1.invitations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InvitationsIdAcceptKey() {
  return ['v1', '/v1/invitations/:id:accept', 'POST'] as const
}

export function usePostV1InvitationsIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invitations)[':id:accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invitations)[':id:accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvitationsIdAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.invitations)[':id:accept']['$post']> },
      ) => parseResponse(client.v1.invitations[':id:accept'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrationsKey() {
  return ['v1', '/v1/registrations', 'POST'] as const
}

export function usePostV1Registrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.registrations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.registrations.$post> }) =>
        parseResponse(client.v1.registrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1RegistrationsRegistrationIdKey() {
  return ['v1', '/v1/registrations/:registrationId', 'DELETE'] as const
}

export function useDeleteV1RegistrationsRegistrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.registrations)[':registrationId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.registrations)[':registrationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RegistrationsRegistrationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.registrations)[':registrationId']['$delete']>
        },
      ) => parseResponse(client.v1.registrations[':registrationId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UserProfilesStudentIdGuardianInvitationsKey(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']
  >,
) {
  return ['v1', '/v1/userProfiles/:studentId/guardianInvitations', args] as const
}

export function useGetV1UserProfilesStudentIdGuardianInvitations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']
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
        ? getGetV1UserProfilesStudentIdGuardianInvitationsKey(args)
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
                (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']
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
          client.v1.userProfiles[':studentId'].guardianInvitations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UserProfilesStudentIdGuardianInvitations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']
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
        ? getGetV1UserProfilesStudentIdGuardianInvitationsKey(args)
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
                (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']
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
          client.v1.userProfiles[':studentId'].guardianInvitations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1UserProfilesStudentIdGuardianInvitationsKey() {
  return ['v1', '/v1/userProfiles/:studentId/guardianInvitations', 'POST'] as const
}

export function usePostV1UserProfilesStudentIdGuardianInvitations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UserProfilesStudentIdGuardianInvitationsKey()
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
            (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.userProfiles[':studentId'].guardianInvitations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1UserProfilesStudentIdGuardianInvitationsInvitationIdKey(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
  >,
) {
  return ['v1', '/v1/userProfiles/:studentId/guardianInvitations/:invitationId', args] as const
}

export function useGetV1UserProfilesStudentIdGuardianInvitationsInvitationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
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
        ? getGetV1UserProfilesStudentIdGuardianInvitationsInvitationIdKey(args)
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
                (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
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
          client.v1.userProfiles[':studentId'].guardianInvitations[':invitationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UserProfilesStudentIdGuardianInvitationsInvitationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
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
        ? getGetV1UserProfilesStudentIdGuardianInvitationsInvitationIdKey(args)
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
                (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
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
          client.v1.userProfiles[':studentId'].guardianInvitations[':invitationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1UserProfilesStudentIdGuardianInvitationsInvitationIdKey() {
  return ['v1', '/v1/userProfiles/:studentId/guardianInvitations/:invitationId', 'PATCH'] as const
}

export function usePatchV1UserProfilesStudentIdGuardianInvitationsInvitationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1UserProfilesStudentIdGuardianInvitationsInvitationIdKey()
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
            (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.userProfiles[':studentId'].guardianInvitations[':invitationId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1UserProfilesStudentIdGuardiansKey(
  args: InferRequestType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>,
) {
  return ['v1', '/v1/userProfiles/:studentId/guardians', args] as const
}

export function useGetV1UserProfilesStudentIdGuardians<TError = unknown>(
  args: InferRequestType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>>
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
        ? getGetV1UserProfilesStudentIdGuardiansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.userProfiles[':studentId'].guardians.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UserProfilesStudentIdGuardians<TError = unknown>(
  args: InferRequestType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>>
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
        ? getGetV1UserProfilesStudentIdGuardiansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.userProfiles[':studentId'].guardians.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UserProfilesStudentIdGuardiansGuardianIdKey(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
  >,
) {
  return ['v1', '/v1/userProfiles/:studentId/guardians/:guardianId', args] as const
}

export function useGetV1UserProfilesStudentIdGuardiansGuardianId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
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
        ? getGetV1UserProfilesStudentIdGuardiansGuardianIdKey(args)
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
                (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
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
          client.v1.userProfiles[':studentId'].guardians[':guardianId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UserProfilesStudentIdGuardiansGuardianId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
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
        ? getGetV1UserProfilesStudentIdGuardiansGuardianIdKey(args)
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
                (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
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
          client.v1.userProfiles[':studentId'].guardians[':guardianId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1UserProfilesStudentIdGuardiansGuardianIdKey() {
  return ['v1', '/v1/userProfiles/:studentId/guardians/:guardianId', 'DELETE'] as const
}

export function useDeleteV1UserProfilesStudentIdGuardiansGuardianId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UserProfilesStudentIdGuardiansGuardianIdKey()
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
            (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.userProfiles[':studentId'].guardians[':guardianId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1UserProfilesUserIdKey(
  args: InferRequestType<(typeof client.v1.userProfiles)[':userId']['$get']>,
) {
  return ['v1', '/v1/userProfiles/:userId', args] as const
}

export function useGetV1UserProfilesUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.userProfiles)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userProfiles)[':userId']['$get']>>
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
        ? getGetV1UserProfilesUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userProfiles)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.userProfiles[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UserProfilesUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.userProfiles)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userProfiles)[':userId']['$get']>>
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
        ? getGetV1UserProfilesUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userProfiles)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.userProfiles[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
