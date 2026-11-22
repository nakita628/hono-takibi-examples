import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
  >,
) {
  return ['1.1', '/1.1/workgroups/:workgroup_id/projects/:project_id/fileTags', args] as const
}

export function get11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].fileTags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create11WorkgroupsWorkgroupIdProjectsProjectIdFileTags<
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
  args: () => InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function get11WorkgroupsWorkgroupIdProjectsProjectIdFilesQueryKey(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
  >,
) {
  return ['1.1', '/1.1/workgroups/:workgroup_id/projects/:project_id/files', args] as const
}

export function get11WorkgroupsWorkgroupIdProjectsProjectIdFilesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get11WorkgroupsWorkgroupIdProjectsProjectIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create11WorkgroupsWorkgroupIdProjectsProjectIdFiles<
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
  args: () => InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get11WorkgroupsWorkgroupIdProjectsProjectIdFilesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPost11WorkgroupsWorkgroupIdProjectsProjectIdFiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost11WorkgroupsWorkgroupIdProjectsProjectIdFilesMutationOptions<
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

export function get11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdQueryKey(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
  >,
) {
  return ['1.1', '/1.1/workgroups/:workgroup_id/projects/:project_id/files/:file_id', args] as const
}

export function get11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files[':file_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function create11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileId<
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
  args: () => InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function get11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryKey(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
  >,
) {
  return ['1.1', '/1.1/workgroups/:workgroup_id/projects/:project_id/specs/:spec_id', args] as const
}

export function get11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function create11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId<
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
  args: () => InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPut11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPut11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdMutationOptions<
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

export function createPost11WorkgroupsWorkgroupIdProjectsProjectIdTeammembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPost11WorkgroupsWorkgroupIdProjectsProjectIdTeammembersMutationOptions<
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

export function get11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryKey(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
  >,
) {
  return [
    '1.1',
    '/1.1/workgroups/:workgroup_id/specTypes/:spec_type_id/specTypeFields',
    args,
  ] as const
}

export function get11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1.1'].workgroups[':workgroup_id'].specTypes[':spec_type_id'].specTypeFields.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function create11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields<
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
  args: () => InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1CountriesQueryKey() {
  return ['v1', '/v1/countries'] as const
}

export function getV1CountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CountriesQueryKey>
  >({
    queryKey: getV1CountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.countries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Countries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CountriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1WorkgroupsQueryKey(args: InferRequestType<typeof client.v1.workgroups.$get>) {
  return ['v1', '/v1/workgroups', args] as const
}

export function getV1WorkgroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workgroups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.workgroups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workgroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkgroupsQueryKey>
  >({
    queryKey: getV1WorkgroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Workgroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workgroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.workgroups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workgroups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkgroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1WorkgroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdAutomaticInvitationsQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/automaticInvitations', args] as const
}

export function getV1WorkgroupsWorkgroupIdAutomaticInvitationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdAutomaticInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].automaticInvitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdAutomaticInvitations<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdAutomaticInvitationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdBillingRecipientsQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/billingRecipients', args] as const
}

export function getV1WorkgroupsWorkgroupIdBillingRecipientsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdBillingRecipientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].billingRecipients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdBillingRecipients<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdBillingRecipientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdBillingRecipientsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdBuyOrdersQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/buyOrders', args] as const
}

export function getV1WorkgroupsWorkgroupIdBuyOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdBuyOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].buyOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdBuyOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdBuyOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdBuyOrdersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/buyOrders/:order_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].buyOrders[':order_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdBuyOrdersOrderId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/clientWorkgroups', args] as const
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdClientWorkgroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].clientWorkgroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdClientWorkgroups<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdClientWorkgroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/clientWorkgroups/:client_workgroup_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].clientWorkgroups[':client_workgroup_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/clientWorkgroups/:client_workgroup_id/projectCategory',
    args,
  ] as const
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].clientWorkgroups[
          ':client_workgroup_id'
        ].projectCategory.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategory<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/clientWorkgroups/:client_workgroup_id/projectHomeUserFields',
    args,
  ] as const
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].clientWorkgroups[
          ':client_workgroup_id'
        ].projectHomeUserFields.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFields<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/clientWorkgroups/:client_workgroup_id/projectStatus',
    args,
  ] as const
}

export function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].clientWorkgroups[
          ':client_workgroup_id'
        ].projectStatus.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatus<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdContactsQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/contacts', args] as const
}

export function getV1WorkgroupsWorkgroupIdContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdContactsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdContactsUserIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/contacts/:user_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdContactsUserIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdContactsUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].contacts[':user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdContactsUserId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdContactsUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdCustomTaskStatusQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/customTaskStatus', args] as const
}

export function getV1WorkgroupsWorkgroupIdCustomTaskStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdCustomTaskStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].customTaskStatus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdCustomTaskStatus<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdCustomTaskStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdCustomTaskStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdCustomTaskTypesQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/customTaskTypes', args] as const
}

export function getV1WorkgroupsWorkgroupIdCustomTaskTypesQueryOptions<
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
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdCustomTaskTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].customTaskTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdCustomTaskTypes<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdCustomTaskTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdCustomTaskTypesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdDeactivationReasonsQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/deactivationReasons', args] as const
}

export function getV1WorkgroupsWorkgroupIdDeactivationReasonsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdDeactivationReasonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].deactivationReasons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdDeactivationReasons<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdDeactivationReasonsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdDefaultTaskPriorityQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/defaultTaskPriority', args] as const
}

export function getV1WorkgroupsWorkgroupIdDefaultTaskPriorityQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdDefaultTaskPriorityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].defaultTaskPriority.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdDefaultTaskPriority<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdDefaultTaskPriorityQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdDefaultTaskStatusQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/defaultTaskStatus', args] as const
}

export function getV1WorkgroupsWorkgroupIdDefaultTaskStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdDefaultTaskStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].defaultTaskStatus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdDefaultTaskStatus<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdDefaultTaskStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdDefaultTaskStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdDetailQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/detail', args] as const
}

export function getV1WorkgroupsWorkgroupIdDetailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdDetailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].detail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdDetailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1WorkgroupsWorkgroupIdDetail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1WorkgroupsWorkgroupIdDetailMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdExchangeRateQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/exchangeRate', args] as const
}

export function getV1WorkgroupsWorkgroupIdExchangeRateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdExchangeRateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].exchangeRate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdExchangeRate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdExchangeRateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1WorkgroupsWorkgroupIdExchangeRate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkgroupsWorkgroupIdExchangeRateMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdMyTimeCardsQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/myTimeCards', args] as const
}

export function getV1WorkgroupsWorkgroupIdMyTimeCardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdMyTimeCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].myTimeCards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdMyTimeCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdMyTimeCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdMyTimeCardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/myTimeCards/:timeCard_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].myTimeCards[':timeCard_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProductTypesQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/productTypes', args] as const
}

export function getV1WorkgroupsWorkgroupIdProductTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProductTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].productTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProductTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProductTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/productTypesOfSpecTypes', args] as const
}

export function getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].productTypesOfSpecTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProductTypesOfSpecTypes<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1WorkgroupsWorkgroupIdProductTypesOfSpecTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesMutationOptions<
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

export function createPostV1WorkgroupsWorkgroupIdProfileImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProfileImageMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdProjectCategoryQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projectCategory', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectCategoryQueryOptions<
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
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projectCategory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectCategory<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectCategoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectCategoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projectHomeUserFields', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projectHomeUserFields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectHomeUserFields<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectStatusQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projectStatus', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projectStatus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectsQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1WorkgroupsWorkgroupIdProjects<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProjectsMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutV1WorkgroupsWorkgroupIdProjectsProjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1WorkgroupsWorkgroupIdProjectsProjectIdMutationOptions<
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

export function createDeleteV1WorkgroupsWorkgroupIdProjectsProjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdMutationOptions<
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

export function createPatchV1WorkgroupsWorkgroupIdProjectsProjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1WorkgroupsWorkgroupIdProjectsProjectIdMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/buyOrders', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrders<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/buyOrders/:order_id',
    args,
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders[':order_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdMutationOptions<
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

export function createPostV1WorkgroupsWorkgroupIdProjectsProjectIdChildren<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProjectsProjectIdChildrenMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/estimates', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdEstimates<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1WorkgroupsWorkgroupIdProjectsProjectIdEstimates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/estimates/:estimate_id',
    args,
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates[
          ':estimate_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/invoices/orders/:order_id',
    args,
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices.orders[
          ':order_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/invoices/:invoice_id',
    args,
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices[':invoice_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/invoices/:invoice_id/files',
    args,
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices[
          ':invoice_id'
        ].files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFiles<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/memberroles/:user_id',
    args,
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].memberroles[':user_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/orders/:order_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].orders[':order_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/quotes', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdQuotes<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/quotes/:quote_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes[':quote_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/rfes', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdRfes<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1WorkgroupsWorkgroupIdProjectsProjectIdRfes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProjectsProjectIdRfesMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/rfes/:rfe_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes[':rfe_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/rfqs', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfqs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdRfqs<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/rfqs/:rfq_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfqs[':rfq_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/sellOrders', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrders<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/sellOrders/:order_id',
    args,
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders[':order_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/shipments', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdShipments<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1WorkgroupsWorkgroupIdProjectsProjectIdShipments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/shipments/:shipment_id',
    args,
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments[
          ':shipment_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationIdMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/specs', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdSpecs<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1WorkgroupsWorkgroupIdProjectsProjectIdSpecs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/specs/:spec_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/tasks', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdTasks<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1WorkgroupsWorkgroupIdProjectsProjectIdTasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkgroupsWorkgroupIdProjectsProjectIdTasksMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/tasks/:task_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks[':task_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/teamMembersOfClientProject',
    args,
  ] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[
          ':project_id'
        ].teamMembersOfClientProject.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProject<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/teammembers', args] as const
}

export function getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].projects[':project_id'].teammembers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembers<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersMutationOptions<
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

export function createDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberIdMutationOptions<
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

export function getV1WorkgroupsWorkgroupIdQuoteStatesQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/quoteStates', args] as const
}

export function getV1WorkgroupsWorkgroupIdQuoteStatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdQuoteStatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].quoteStates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdQuoteStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdQuoteStatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdQuoteStatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdQuotesQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/quotes', args] as const
}

export function getV1WorkgroupsWorkgroupIdQuotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].quotes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdQuotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdReceivedTimeCardsQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/receivedTimeCards', args] as const
}

export function getV1WorkgroupsWorkgroupIdReceivedTimeCardsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdReceivedTimeCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].receivedTimeCards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdReceivedTimeCards<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdReceivedTimeCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdReceivedTimeCardsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/receivedTimeCards/:timeCard_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].receivedTimeCards[':timeCard_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdSellOrdersQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/sellOrders', args] as const
}

export function getV1WorkgroupsWorkgroupIdSellOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdSellOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].sellOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdSellOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdSellOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdSellOrdersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdSellOrdersOrderIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/sellOrders/:order_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdSellOrdersOrderIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdSellOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].sellOrders[':order_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdSellOrdersOrderId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdSellOrdersOrderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdSpecTemplatesQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/specTemplates', args] as const
}

export function getV1WorkgroupsWorkgroupIdSpecTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdSpecTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].specTemplates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdSpecTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdSpecTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/specTemplates/:spec_template_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].specTemplates[':spec_template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/specTypes/:spec_type_id/specTypeFields',
    args,
  ] as const
}

export function getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].specTypes[':spec_type_id'].specTypeFields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdSupplierWorkgroupsQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/supplierWorkgroups', args] as const
}

export function getV1WorkgroupsWorkgroupIdSupplierWorkgroupsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdSupplierWorkgroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].supplierWorkgroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdSupplierWorkgroups<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdSupplierWorkgroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdSupplierWorkgroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/supplierWorkgroups/:bu_supplier_workgroup_id',
    args,
  ] as const
}

export function getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].supplierWorkgroups[':bu_supplier_workgroup_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdTaskTypesQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/taskTypes', args] as const
}

export function getV1WorkgroupsWorkgroupIdTaskTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdTaskTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].taskTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdTaskTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdTaskTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdTaskTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdTasksQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/tasks', args] as const
}

export function getV1WorkgroupsWorkgroupIdTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdTasksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdTasksTaskIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/tasks/:task_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdTasksTaskIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].tasks[':task_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdTasksTaskId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdTasksTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdTasksTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdTeamTemplatesQueryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/teamTemplates', args] as const
}

export function getV1WorkgroupsWorkgroupIdTeamTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdTeamTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].teamTemplates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdTeamTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdTeamTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/teamTemplates/:team_template_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].teamTemplates[':team_template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdWorkgroupMembersQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/workgroupMembers', args] as const
}

export function getV1WorkgroupsWorkgroupIdWorkgroupMembersQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdWorkgroupMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].workgroupMembers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdWorkgroupMembers<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkgroupsWorkgroupIdWorkgroupMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdWorkgroupMembersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/workgroupMembers/:user_id', args] as const
}

export function getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workgroups[':workgroup_id'].workgroupMembers[':user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkgroupsWorkgroupIdWorkgroupMembersUserId<
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
  args: () => InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
