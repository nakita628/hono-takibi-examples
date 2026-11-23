import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_1_1Key() {
  return ['1.1'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function get11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
    >
  >,
) {
  return [
    '1.1',
    '/1.1/workgroups/:workgroup_id/projects/:project_id/fileTags',
    toValue(args),
  ] as const
}

export function get11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].fileTags.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use11WorkgroupsWorkgroupIdProjectsProjectIdFileTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].fileTags.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get11WorkgroupsWorkgroupIdProjectsProjectIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
    >
  >,
) {
  return ['1.1', '/1.1/workgroups/:workgroup_id/projects/:project_id/files', toValue(args)] as const
}

export function get11WorkgroupsWorkgroupIdProjectsProjectIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get11WorkgroupsWorkgroupIdProjectsProjectIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use11WorkgroupsWorkgroupIdProjectsProjectIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get11WorkgroupsWorkgroupIdProjectsProjectIdFilesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get11WorkgroupsWorkgroupIdProjectsProjectIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get11WorkgroupsWorkgroupIdProjectsProjectIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPost11WorkgroupsWorkgroupIdProjectsProjectIdFilesMutationKey() {
  return ['1.1', '/1.1/workgroups/:workgroup_id/projects/:project_id/files', 'POST'] as const
}

export function getPost11WorkgroupsWorkgroupIdProjectsProjectIdFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost11WorkgroupsWorkgroupIdProjectsProjectIdFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$post']
      >,
    ) {
      return parseResponse(
        client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost11WorkgroupsWorkgroupIdProjectsProjectIdFiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost11WorkgroupsWorkgroupIdProjectsProjectIdFilesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
    >
  >,
) {
  return [
    '1.1',
    '/1.1/workgroups/:workgroup_id/projects/:project_id/files/:file_id',
    toValue(args),
  ] as const
}

export function get11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files[':file_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files[':file_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
    >
  >,
) {
  return [
    '1.1',
    '/1.1/workgroups/:workgroup_id/projects/:project_id/specs/:spec_id',
    toValue(args),
  ] as const
}

export function get11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPut11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdMutationKey() {
  return [
    '1.1',
    '/1.1/workgroups/:workgroup_id/projects/:project_id/specs/:spec_id',
    'PUT',
  ] as const
}

export function getPut11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
      >,
    ) {
      return parseResponse(
        client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePut11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost11WorkgroupsWorkgroupIdProjectsProjectIdTeammembersMutationKey() {
  return ['1.1', '/1.1/workgroups/:workgroup_id/projects/:project_id/teammembers', 'POST'] as const
}

export function getPost11WorkgroupsWorkgroupIdProjectsProjectIdTeammembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['teammembers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['teammembers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost11WorkgroupsWorkgroupIdProjectsProjectIdTeammembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['teammembers']['$post']
      >,
    ) {
      return parseResponse(
        client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].teammembers.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost11WorkgroupsWorkgroupIdProjectsProjectIdTeammembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['teammembers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['teammembers']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPost11WorkgroupsWorkgroupIdProjectsProjectIdTeammembersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
    >
  >,
) {
  return [
    '1.1',
    '/1.1/workgroups/:workgroup_id/specTypes/:spec_type_id/specTypeFields',
    toValue(args),
  ] as const
}

export function get11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1.1'].workgroups[':workgroup_id'].specTypes[':spec_type_id'].specTypeFields.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['1.1'].workgroups[':workgroup_id'].specTypes[':spec_type_id'].specTypeFields.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1CountriesQueryKey() {
  return ['v1', '/v1/countries'] as const
}

export function getV1CountriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1CountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.countries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Countries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
          >,
          ReturnType<typeof getV1CountriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1CountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.countries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workgroups.$get>>,
) {
  return ['v1', '/v1/workgroups', toValue(args)] as const
}

export function getV1WorkgroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workgroups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Workgroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workgroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workgroups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workgroups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workgroups.$get>>>>
          >,
          ReturnType<typeof getV1WorkgroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workgroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdAutomaticInvitationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/automaticInvitations', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdAutomaticInvitationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdAutomaticInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].automaticInvitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdAutomaticInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdAutomaticInvitationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdAutomaticInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdAutomaticInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].automaticInvitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdBillingRecipientsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/billingRecipients', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdBillingRecipientsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdBillingRecipientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].billingRecipients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdBillingRecipients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdBillingRecipientsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdBillingRecipientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdBillingRecipientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].billingRecipients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdBuyOrdersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/buyOrders', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdBuyOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdBuyOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].buyOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdBuyOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdBuyOrdersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdBuyOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdBuyOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].buyOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/buyOrders/:order_id', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].buyOrders[':order_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdBuyOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].buyOrders[':order_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/clientWorkgroups', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdClientWorkgroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].clientWorkgroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdClientWorkgroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdClientWorkgroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].clientWorkgroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/clientWorkgroups/:client_workgroup_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].clientWorkgroups[':client_workgroup_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].clientWorkgroups[':client_workgroup_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/clientWorkgroups/:client_workgroup_id/projectCategory',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].clientWorkgroups[
          ':client_workgroup_id'
        ].projectCategory.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].clientWorkgroups[
            ':client_workgroup_id'
          ].projectCategory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/clientWorkgroups/:client_workgroup_id/projectHomeUserFields',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].clientWorkgroups[
          ':client_workgroup_id'
        ].projectHomeUserFields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].clientWorkgroups[
            ':client_workgroup_id'
          ].projectHomeUserFields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/clientWorkgroups/:client_workgroup_id/projectStatus',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].clientWorkgroups[
          ':client_workgroup_id'
        ].projectStatus.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].clientWorkgroups[
            ':client_workgroup_id'
          ].projectStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdContactsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/contacts', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdContactsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].contacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdContactsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdContactsUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/contacts/:user_id', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdContactsUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdContactsUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].contacts[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdContactsUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdContactsUserIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdContactsUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdContactsUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].contacts[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdCustomTaskStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/customTaskStatus', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdCustomTaskStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdCustomTaskStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].customTaskStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdCustomTaskStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdCustomTaskStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdCustomTaskStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdCustomTaskStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].customTaskStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdCustomTaskTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/customTaskTypes', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdCustomTaskTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdCustomTaskTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].customTaskTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdCustomTaskTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdCustomTaskTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdCustomTaskTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdCustomTaskTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].customTaskTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdDeactivationReasonsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/deactivationReasons', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdDeactivationReasonsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdDeactivationReasonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].deactivationReasons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdDeactivationReasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdDeactivationReasonsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdDeactivationReasonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdDeactivationReasonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].deactivationReasons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdDefaultTaskPriorityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/defaultTaskPriority', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdDefaultTaskPriorityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdDefaultTaskPriorityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].defaultTaskPriority.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdDefaultTaskPriority<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdDefaultTaskPriorityQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdDefaultTaskPriorityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdDefaultTaskPriorityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].defaultTaskPriority.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdDefaultTaskStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/defaultTaskStatus', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdDefaultTaskStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdDefaultTaskStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].defaultTaskStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdDefaultTaskStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdDefaultTaskStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdDefaultTaskStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdDefaultTaskStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].defaultTaskStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdDetailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/detail', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdDetailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdDetailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].detail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdDetailQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdDetailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdDetailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].detail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1WorkgroupsWorkgroupIdDetailMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/detail', 'PUT'] as const
}

export function getPutV1WorkgroupsWorkgroupIdDetailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkgroupsWorkgroupIdDetailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$put']>,
    ) {
      return parseResponse(client.v1.workgroups[':workgroup_id'].detail.$put(args, options))
    },
  })
}

export function usePutV1WorkgroupsWorkgroupIdDetail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1WorkgroupsWorkgroupIdDetailMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdExchangeRateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/exchangeRate', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdExchangeRateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdExchangeRateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].exchangeRate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdExchangeRate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdExchangeRateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdExchangeRateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdExchangeRateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].exchangeRate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkgroupsWorkgroupIdExchangeRateMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/exchangeRate', 'POST'] as const
}

export function getPostV1WorkgroupsWorkgroupIdExchangeRateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkgroupsWorkgroupIdExchangeRateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$post']
      >,
    ) {
      return parseResponse(client.v1.workgroups[':workgroup_id'].exchangeRate.$post(args, options))
    },
  })
}

export function usePostV1WorkgroupsWorkgroupIdExchangeRate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkgroupsWorkgroupIdExchangeRateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdMyTimeCardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/myTimeCards', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdMyTimeCardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdMyTimeCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].myTimeCards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdMyTimeCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdMyTimeCardsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdMyTimeCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdMyTimeCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].myTimeCards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/myTimeCards/:timeCard_id', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].myTimeCards[':timeCard_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].myTimeCards[':timeCard_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProductTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/productTypes', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdProductTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProductTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].productTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProductTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProductTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProductTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProductTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].productTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
    >
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/productTypesOfSpecTypes', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].productTypesOfSpecTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProductTypesOfSpecTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].productTypesOfSpecTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/productTypesOfSpecTypes', 'POST'] as const
}

export function getPostV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].productTypesOfSpecTypes.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkgroupsWorkgroupIdProductTypesOfSpecTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1WorkgroupsWorkgroupIdProfileImageMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/profileImage', 'POST'] as const
}

export function getPostV1WorkgroupsWorkgroupIdProfileImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['profileImage']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['profileImage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkgroupsWorkgroupIdProfileImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['profileImage']['$post']
      >,
    ) {
      return parseResponse(client.v1.workgroups[':workgroup_id'].profileImage.$post(args, options))
    },
  })
}

export function usePostV1WorkgroupsWorkgroupIdProfileImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['profileImage']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['profileImage']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProfileImageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectCategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projectCategory', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdProjectCategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projectCategory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectCategoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projectCategory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
    >
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projectHomeUserFields', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projectHomeUserFields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectHomeUserFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projectHomeUserFields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projectStatus', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdProjectStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projectStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projectStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkgroupsWorkgroupIdProjectsMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects', 'POST'] as const
}

export function getPostV1WorkgroupsWorkgroupIdProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkgroupsWorkgroupIdProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$post']>,
    ) {
      return parseResponse(client.v1.workgroups[':workgroup_id'].projects.$post(args, options))
    },
  })
}

export function usePostV1WorkgroupsWorkgroupIdProjects<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProjectsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id', 'PUT'] as const
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkgroupsWorkgroupIdProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].$put(args, options),
      )
    },
  })
}

export function usePutV1WorkgroupsWorkgroupIdProjectsProjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1WorkgroupsWorkgroupIdProjectsProjectIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id', 'DELETE'] as const
}

export function getDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1WorkgroupsWorkgroupIdProjectsProjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1WorkgroupsWorkgroupIdProjectsProjectIdMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id', 'PATCH'] as const
}

export function getPatchV1WorkgroupsWorkgroupIdProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1WorkgroupsWorkgroupIdProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1WorkgroupsWorkgroupIdProjectsProjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1WorkgroupsWorkgroupIdProjectsProjectIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/buyOrders',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/buyOrders', 'POST'] as const
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/buyOrders/:order_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders[':order_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders[':order_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdMutationKey() {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/buyOrders/:order_id',
    'PUT',
  ] as const
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders[':order_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdChildrenMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/children', 'POST'] as const
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdChildrenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['children']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['children']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkgroupsWorkgroupIdProjectsProjectIdChildrenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['children']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].children.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdChildren<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['children']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['children']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProjectsProjectIdChildrenMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/estimates',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdEstimates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/estimates', 'POST'] as const
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdEstimates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/estimates/:estimate_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates[
          ':estimate_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates[
            ':estimate_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/invoices/orders/:order_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices.orders[
          ':order_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices.orders[
            ':order_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/invoices/:invoice_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices[':invoice_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices[
            ':invoice_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/invoices/:invoice_id/files',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices[
          ':invoice_id'
        ].files.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices[
            ':invoice_id'
          ].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/memberroles/:user_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].memberroles[':user_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].memberroles[
            ':user_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/orders/:order_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].orders[':order_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].orders[':order_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
    >
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/quotes', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/quotes/:quote_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes[':quote_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes[':quote_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdMutationKey() {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/quotes/:quote_id',
    'PUT',
  ] as const
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes[':quote_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
    >
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/rfes', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdRfes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdRfesMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/rfes', 'POST'] as const
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdRfesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkgroupsWorkgroupIdProjectsProjectIdRfesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdRfes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProjectsProjectIdRfesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/rfes/:rfe_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes[':rfe_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes[':rfe_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
    >
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/rfqs', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfqs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdRfqs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfqs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/rfqs/:rfq_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfqs[':rfq_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfqs[':rfq_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/sellOrders',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/sellOrders/:order_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders[':order_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders[
            ':order_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdMutationKey() {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/sellOrders/:order_id',
    'PUT',
  ] as const
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders[':order_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/shipments',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdShipments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/shipments', 'POST'] as const
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdShipments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/shipments/:shipment_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments[
          ':shipment_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments[
            ':shipment_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationIdMutationKey() {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/shipments/:shipment_id/locations/:location_id',
    'PUT',
  ] as const
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['locations'][':location_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['locations'][':location_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['locations'][':location_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments[
          ':shipment_id'
        ].locations[':location_id'].$put(args, options),
      )
    },
  })
}

export function usePutV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['locations'][':location_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['locations'][':location_id']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
    >
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/specs', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdSpecs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/specs', 'POST'] as const
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdSpecs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/specs/:spec_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/specs/:spec_id', 'PUT'] as const
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
    >
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/tasks', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdTasksMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/tasks', 'POST'] as const
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkgroupsWorkgroupIdProjectsProjectIdTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdTasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProjectsProjectIdTasksMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/tasks/:task_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks[':task_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks[':task_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/teamMembersOfClientProject',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[
          ':project_id'
        ].teamMembersOfClientProject.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[
            ':project_id'
          ].teamMembersOfClientProject.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/teammembers',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].teammembers.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].teammembers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersMutationKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/teammembers', 'POST'] as const
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].teammembers.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberIdMutationKey() {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/teammembers/:teammember_id',
    'DELETE',
  ] as const
}

export function getDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers'][':teammember_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers'][':teammember_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers'][':teammember_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].teammembers[
          ':teammember_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers'][':teammember_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers'][':teammember_id']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdQuoteStatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/quoteStates', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdQuoteStatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdQuoteStatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].quoteStates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdQuoteStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdQuoteStatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdQuoteStatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdQuoteStatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].quoteStates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdQuotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/quotes', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdQuotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].quotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdQuotesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdReceivedTimeCardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/receivedTimeCards', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdReceivedTimeCardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdReceivedTimeCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].receivedTimeCards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdReceivedTimeCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdReceivedTimeCardsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdReceivedTimeCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdReceivedTimeCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].receivedTimeCards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/receivedTimeCards/:timeCard_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].receivedTimeCards[':timeCard_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].receivedTimeCards[':timeCard_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdSellOrdersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/sellOrders', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdSellOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdSellOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].sellOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdSellOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdSellOrdersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdSellOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdSellOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].sellOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdSellOrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/sellOrders/:order_id', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdSellOrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdSellOrdersOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].sellOrders[':order_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdSellOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdSellOrdersOrderIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdSellOrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdSellOrdersOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].sellOrders[':order_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdSpecTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/specTemplates', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdSpecTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdSpecTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].specTemplates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdSpecTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdSpecTemplatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdSpecTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdSpecTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].specTemplates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/specTemplates/:spec_template_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].specTemplates[':spec_template_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].specTemplates[':spec_template_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/specTypes/:spec_type_id/specTypeFields',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].specTypes[':spec_type_id'].specTypeFields.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].specTypes[':spec_type_id'].specTypeFields.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdSupplierWorkgroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/supplierWorkgroups', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdSupplierWorkgroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdSupplierWorkgroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].supplierWorkgroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdSupplierWorkgroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdSupplierWorkgroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdSupplierWorkgroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdSupplierWorkgroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].supplierWorkgroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/supplierWorkgroups/:bu_supplier_workgroup_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].supplierWorkgroups[':bu_supplier_workgroup_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].supplierWorkgroups[
            ':bu_supplier_workgroup_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdTaskTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/taskTypes', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdTaskTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdTaskTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].taskTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdTaskTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdTaskTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdTaskTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdTaskTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].taskTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdTasksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/tasks', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdTasksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdTasksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/tasks/:task_id', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].tasks[':task_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdTasksTaskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdTasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].tasks[':task_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdTeamTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/teamTemplates', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdTeamTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdTeamTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].teamTemplates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdTeamTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdTeamTemplatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdTeamTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdTeamTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].teamTemplates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/teamTemplates/:team_template_id',
    toValue(args),
  ] as const
}

export function getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].teamTemplates[':team_template_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].teamTemplates[':team_template_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdWorkgroupMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']>
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/workgroupMembers', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdWorkgroupMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdWorkgroupMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].workgroupMembers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdWorkgroupMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdWorkgroupMembersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdWorkgroupMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdWorkgroupMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].workgroupMembers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/workgroupMembers/:user_id', toValue(args)] as const
}

export function getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].workgroupMembers[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkgroupsWorkgroupIdWorkgroupMembersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workgroups[':workgroup_id'].workgroupMembers[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
