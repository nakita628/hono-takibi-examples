import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_1_1Key() {
  return ['1.1'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getGet11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsKey(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
  >,
) {
  return ['1.1', '/1.1/workgroups/:workgroup_id/projects/:project_id/fileTags', args] as const
}

export function useGet11WorkgroupsWorkgroupIdProjectsProjectIdFileTags<TError = unknown>(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsKey(args)
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
                (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
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
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].fileTags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet11WorkgroupsWorkgroupIdProjectsProjectIdFileTags<TError = unknown>(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsKey(args)
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
                (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
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
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].fileTags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet11WorkgroupsWorkgroupIdProjectsProjectIdFilesKey(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
  >,
) {
  return ['1.1', '/1.1/workgroups/:workgroup_id/projects/:project_id/files', args] as const
}

export function useGet11WorkgroupsWorkgroupIdProjectsProjectIdFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet11WorkgroupsWorkgroupIdProjectsProjectIdFilesKey(args)
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
                (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
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
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet11WorkgroupsWorkgroupIdProjectsProjectIdFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet11WorkgroupsWorkgroupIdProjectsProjectIdFilesKey(args)
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
                (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
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
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost11WorkgroupsWorkgroupIdProjectsProjectIdFilesKey() {
  return ['1.1', '/1.1/workgroups/:workgroup_id/projects/:project_id/files', 'POST'] as const
}

export function usePost11WorkgroupsWorkgroupIdProjectsProjectIdFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost11WorkgroupsWorkgroupIdProjectsProjectIdFilesKey()
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
            (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$post']
          >
        },
      ) =>
        parseResponse(
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdKey(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
  >,
) {
  return ['1.1', '/1.1/workgroups/:workgroup_id/projects/:project_id/files/:file_id', args] as const
}

export function useGet11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdKey(args)
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
                (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
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
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files[':file_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdKey(args)
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
                (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
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
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files[':file_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdKey(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
  >,
) {
  return ['1.1', '/1.1/workgroups/:workgroup_id/projects/:project_id/specs/:spec_id', args] as const
}

export function useGet11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdKey(args)
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
                (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
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
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdKey(args)
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
                (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
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
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdKey() {
  return [
    '1.1',
    '/1.1/workgroups/:workgroup_id/projects/:project_id/specs/:spec_id',
    'PUT',
  ] as const
}

export function usePut11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdKey()
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
            (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost11WorkgroupsWorkgroupIdProjectsProjectIdTeammembersKey() {
  return ['1.1', '/1.1/workgroups/:workgroup_id/projects/:project_id/teammembers', 'POST'] as const
}

export function usePost11WorkgroupsWorkgroupIdProjectsProjectIdTeammembers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['teammembers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost11WorkgroupsWorkgroupIdProjectsProjectIdTeammembersKey()
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
            (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['teammembers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].teammembers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsKey(
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

export function useGet11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields<TError = unknown>(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsKey(args)
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
                (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
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
          client['1.1'].workgroups[':workgroup_id'].specTypes[':spec_type_id'].specTypeFields.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsKey(args)
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
                (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
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
          client['1.1'].workgroups[':workgroup_id'].specTypes[':spec_type_id'].specTypeFields.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CountriesKey() {
  return ['v1', '/v1/countries'] as const
}

export function useGetV1Countries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CountriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Countries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CountriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsKey(args: InferRequestType<typeof client.v1.workgroups.$get>) {
  return ['v1', '/v1/workgroups', args] as const
}

export function useGetV1Workgroups<TError = unknown>(
  args: InferRequestType<typeof client.v1.workgroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workgroups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WorkgroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workgroups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workgroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Workgroups<TError = unknown>(
  args: InferRequestType<typeof client.v1.workgroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workgroups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WorkgroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workgroups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workgroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdAutomaticInvitationsKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/automaticInvitations', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdAutomaticInvitations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdAutomaticInvitationsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']
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
          client.v1.workgroups[':workgroup_id'].automaticInvitations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdAutomaticInvitations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdAutomaticInvitationsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']
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
          client.v1.workgroups[':workgroup_id'].automaticInvitations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdBillingRecipientsKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/billingRecipients', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdBillingRecipients<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdBillingRecipientsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']
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
          client.v1.workgroups[':workgroup_id'].billingRecipients.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdBillingRecipients<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdBillingRecipientsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']
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
          client.v1.workgroups[':workgroup_id'].billingRecipients.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdBuyOrdersKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/buyOrders', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdBuyOrders<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>>
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
        ? getGetV1WorkgroupsWorkgroupIdBuyOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].buyOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdBuyOrders<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>>
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
        ? getGetV1WorkgroupsWorkgroupIdBuyOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].buyOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdBuyOrdersOrderIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/buyOrders/:order_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdBuyOrdersOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdBuyOrdersOrderIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].buyOrders[':order_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdBuyOrdersOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdBuyOrdersOrderIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].buyOrders[':order_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdClientWorkgroupsKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/clientWorkgroups', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdClientWorkgroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdClientWorkgroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].clientWorkgroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdClientWorkgroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdClientWorkgroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].clientWorkgroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/clientWorkgroups/:client_workgroup_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].clientWorkgroups[':client_workgroup_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].clientWorkgroups[':client_workgroup_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryKey(
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

export function useGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
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
          client.v1.workgroups[':workgroup_id'].clientWorkgroups[
            ':client_workgroup_id'
          ].projectCategory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
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
          client.v1.workgroups[':workgroup_id'].clientWorkgroups[
            ':client_workgroup_id'
          ].projectCategory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsKey(
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

export function useGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFields<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsKey(
            args,
          )
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
                (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
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
          client.v1.workgroups[':workgroup_id'].clientWorkgroups[
            ':client_workgroup_id'
          ].projectHomeUserFields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFields<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsKey(
            args,
          )
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
                (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
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
          client.v1.workgroups[':workgroup_id'].clientWorkgroups[
            ':client_workgroup_id'
          ].projectHomeUserFields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusKey(
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

export function useGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
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
          client.v1.workgroups[':workgroup_id'].clientWorkgroups[
            ':client_workgroup_id'
          ].projectStatus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
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
          client.v1.workgroups[':workgroup_id'].clientWorkgroups[
            ':client_workgroup_id'
          ].projectStatus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdContactsKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/contacts', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>>
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
        ? getGetV1WorkgroupsWorkgroupIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>>
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
        ? getGetV1WorkgroupsWorkgroupIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdContactsUserIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/contacts/:user_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdContactsUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdContactsUserIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].contacts[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdContactsUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdContactsUserIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].contacts[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdCustomTaskStatusKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/customTaskStatus', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdCustomTaskStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdCustomTaskStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].customTaskStatus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdCustomTaskStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdCustomTaskStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].customTaskStatus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdCustomTaskTypesKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/customTaskTypes', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdCustomTaskTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdCustomTaskTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].customTaskTypes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdCustomTaskTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdCustomTaskTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].customTaskTypes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdDeactivationReasonsKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/deactivationReasons', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdDeactivationReasons<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdDeactivationReasonsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']
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
          client.v1.workgroups[':workgroup_id'].deactivationReasons.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdDeactivationReasons<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdDeactivationReasonsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']
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
          client.v1.workgroups[':workgroup_id'].deactivationReasons.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdDefaultTaskPriorityKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/defaultTaskPriority', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdDefaultTaskPriority<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdDefaultTaskPriorityKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']
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
          client.v1.workgroups[':workgroup_id'].defaultTaskPriority.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdDefaultTaskPriority<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdDefaultTaskPriorityKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']
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
          client.v1.workgroups[':workgroup_id'].defaultTaskPriority.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdDefaultTaskStatusKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/defaultTaskStatus', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdDefaultTaskStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdDefaultTaskStatusKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']
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
          client.v1.workgroups[':workgroup_id'].defaultTaskStatus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdDefaultTaskStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdDefaultTaskStatusKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']
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
          client.v1.workgroups[':workgroup_id'].defaultTaskStatus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdDetailKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/detail', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdDetail<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>>
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
        ? getGetV1WorkgroupsWorkgroupIdDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].detail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdDetail<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>>
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
        ? getGetV1WorkgroupsWorkgroupIdDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].detail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1WorkgroupsWorkgroupIdDetailKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/detail', 'PUT'] as const
}

export function usePutV1WorkgroupsWorkgroupIdDetail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkgroupsWorkgroupIdDetailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$put']>
        },
      ) => parseResponse(client.v1.workgroups[':workgroup_id'].detail.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdExchangeRateKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/exchangeRate', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdExchangeRate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdExchangeRateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].exchangeRate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdExchangeRate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdExchangeRateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].exchangeRate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkgroupsWorkgroupIdExchangeRateKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/exchangeRate', 'POST'] as const
}

export function usePostV1WorkgroupsWorkgroupIdExchangeRate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkgroupsWorkgroupIdExchangeRateKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.workgroups[':workgroup_id'].exchangeRate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdMyTimeCardsKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/myTimeCards', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdMyTimeCards<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdMyTimeCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].myTimeCards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdMyTimeCards<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdMyTimeCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].myTimeCards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/myTimeCards/:timeCard_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].myTimeCards[':timeCard_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].myTimeCards[':timeCard_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProductTypesKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/productTypes', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProductTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdProductTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].productTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProductTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdProductTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].productTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/productTypesOfSpecTypes', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProductTypesOfSpecTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
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
          client.v1.workgroups[':workgroup_id'].productTypesOfSpecTypes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProductTypesOfSpecTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
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
          client.v1.workgroups[':workgroup_id'].productTypesOfSpecTypes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/productTypesOfSpecTypes', 'POST'] as const
}

export function usePostV1WorkgroupsWorkgroupIdProductTypesOfSpecTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].productTypesOfSpecTypes.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkgroupsWorkgroupIdProfileImageKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/profileImage', 'POST'] as const
}

export function usePostV1WorkgroupsWorkgroupIdProfileImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['profileImage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkgroupsWorkgroupIdProfileImageKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['profileImage']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.workgroups[':workgroup_id'].profileImage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectCategoryKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projectCategory', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectCategory<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdProjectCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projectCategory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectCategory<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdProjectCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projectCategory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectHomeUserFieldsKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projectHomeUserFields', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectHomeUserFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectHomeUserFieldsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
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
          client.v1.workgroups[':workgroup_id'].projectHomeUserFields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectHomeUserFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectHomeUserFieldsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
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
          client.v1.workgroups[':workgroup_id'].projectHomeUserFields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectStatusKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projectStatus', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdProjectStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projectStatus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdProjectStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projectStatus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjects<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>>
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjects<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>>
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkgroupsWorkgroupIdProjectsKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects', 'POST'] as const
}

export function usePostV1WorkgroupsWorkgroupIdProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkgroupsWorkgroupIdProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$post']>
        },
      ) => parseResponse(client.v1.workgroups[':workgroup_id'].projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id', 'PUT'] as const
}

export function usePutV1WorkgroupsWorkgroupIdProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkgroupsWorkgroupIdProjectsProjectIdKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id', 'DELETE'] as const
}

export function useDeleteV1WorkgroupsWorkgroupIdProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1WorkgroupsWorkgroupIdProjectsProjectIdKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id', 'PATCH'] as const
}

export function usePatchV1WorkgroupsWorkgroupIdProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1WorkgroupsWorkgroupIdProjectsProjectIdKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/buyOrders', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrders<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrders<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/buyOrders', 'POST'] as const
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrders<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdKey(
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

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders[':order_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders[':order_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdKey() {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/buyOrders/:order_id',
    'PUT',
  ] as const
}

export function usePutV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders[':order_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdChildrenKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/children', 'POST'] as const
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdChildren<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['children']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkgroupsWorkgroupIdProjectsProjectIdChildrenKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['children']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].children.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/estimates', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdEstimates<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdEstimates<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/estimates', 'POST'] as const
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdEstimates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdKey(
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

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates[
            ':estimate_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates[
            ':estimate_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdKey(
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

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices.orders[
            ':order_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices.orders[
            ':order_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdKey(
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

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices[
            ':invoice_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices[
            ':invoice_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesKey(
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

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFiles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices[
            ':invoice_id'
          ].files.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFiles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices[
            ':invoice_id'
          ].files.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdKey(
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

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].memberroles[
            ':user_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].memberroles[
            ':user_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/orders/:order_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].orders[':order_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].orders[':order_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/quotes', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdQuotes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdQuotes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/quotes/:quote_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes[':quote_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes[':quote_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdKey() {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/quotes/:quote_id',
    'PUT',
  ] as const
}

export function usePutV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes[':quote_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfesKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/rfes', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfesKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfesKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdRfesKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/rfes', 'POST'] as const
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdRfes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkgroupsWorkgroupIdProjectsProjectIdRfesKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/rfes/:rfe_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes[':rfe_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes[':rfe_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/rfqs', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfqs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfqs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfqs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfqs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/rfqs/:rfq_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfqs[':rfq_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfqs[':rfq_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/sellOrders', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrders<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrders<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdKey(
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

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders[
            ':order_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders[
            ':order_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdKey() {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/sellOrders/:order_id',
    'PUT',
  ] as const
}

export function usePutV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders[
            ':order_id'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/shipments', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdShipments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdShipments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/shipments', 'POST'] as const
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdShipments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdKey(
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

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments[
            ':shipment_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments[
            ':shipment_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationIdKey() {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/shipments/:shipment_id/locations/:location_id',
    'PUT',
  ] as const
}

export function usePutV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['locations'][':location_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationIdKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['locations'][':location_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments[
            ':shipment_id'
          ].locations[':location_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/specs', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/specs', 'POST'] as const
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdSpecs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/specs/:spec_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/specs/:spec_id', 'PUT'] as const
}

export function usePutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdTasksKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/tasks', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdTasks<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdTasksKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdTasks<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdTasksKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdTasksKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/tasks', 'POST'] as const
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkgroupsWorkgroupIdProjectsProjectIdTasksKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/tasks/:task_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks[':task_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks[':task_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectKey(
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

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProject<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[
            ':project_id'
          ].teamMembersOfClientProject.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProject<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[
            ':project_id'
          ].teamMembersOfClientProject.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/teammembers', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].teammembers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
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
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].teammembers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersKey() {
  return ['v1', '/v1/workgroups/:workgroup_id/projects/:project_id/teammembers', 'POST'] as const
}

export function usePostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].teammembers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberIdKey() {
  return [
    'v1',
    '/v1/workgroups/:workgroup_id/projects/:project_id/teammembers/:teammember_id',
    'DELETE',
  ] as const
}

export function useDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers'][':teammember_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberIdKey()
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
            (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers'][':teammember_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].projects[':project_id'].teammembers[
            ':teammember_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdQuoteStatesKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/quoteStates', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdQuoteStates<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdQuoteStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].quoteStates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdQuoteStates<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdQuoteStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].quoteStates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdQuotesKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/quotes', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdQuotes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>>
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
        ? getGetV1WorkgroupsWorkgroupIdQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdQuotes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>>
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
        ? getGetV1WorkgroupsWorkgroupIdQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdReceivedTimeCardsKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/receivedTimeCards', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdReceivedTimeCards<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdReceivedTimeCardsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']
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
          client.v1.workgroups[':workgroup_id'].receivedTimeCards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdReceivedTimeCards<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdReceivedTimeCardsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']
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
          client.v1.workgroups[':workgroup_id'].receivedTimeCards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/receivedTimeCards/:timeCard_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].receivedTimeCards[':timeCard_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].receivedTimeCards[':timeCard_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdSellOrdersKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/sellOrders', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdSellOrders<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdSellOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].sellOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdSellOrders<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdSellOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].sellOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdSellOrdersOrderIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/sellOrders/:order_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdSellOrdersOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdSellOrdersOrderIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].sellOrders[':order_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdSellOrdersOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdSellOrdersOrderIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].sellOrders[':order_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdSpecTemplatesKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/specTemplates', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdSpecTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdSpecTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].specTemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdSpecTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdSpecTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].specTemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/specTemplates/:spec_template_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].specTemplates[':spec_template_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].specTemplates[':spec_template_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsKey(
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

export function useGetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
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
          client.v1.workgroups[':workgroup_id'].specTypes[':spec_type_id'].specTypeFields.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
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
          client.v1.workgroups[':workgroup_id'].specTypes[':spec_type_id'].specTypeFields.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdSupplierWorkgroupsKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/supplierWorkgroups', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdSupplierWorkgroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdSupplierWorkgroupsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']
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
          client.v1.workgroups[':workgroup_id'].supplierWorkgroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdSupplierWorkgroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdSupplierWorkgroupsKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']
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
          client.v1.workgroups[':workgroup_id'].supplierWorkgroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdKey(
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

export function useGetV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].supplierWorkgroups[
            ':bu_supplier_workgroup_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].supplierWorkgroups[
            ':bu_supplier_workgroup_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdTaskTypesKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/taskTypes', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdTaskTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>>
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
        ? getGetV1WorkgroupsWorkgroupIdTaskTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].taskTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdTaskTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>>
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
        ? getGetV1WorkgroupsWorkgroupIdTaskTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].taskTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdTasksKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/tasks', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdTasks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>>
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
        ? getGetV1WorkgroupsWorkgroupIdTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdTasks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>>
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
        ? getGetV1WorkgroupsWorkgroupIdTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workgroups[':workgroup_id'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdTasksTaskIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/tasks/:task_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdTasksTaskId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdTasksTaskIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].tasks[':task_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdTasksTaskId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdTasksTaskIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].tasks[':task_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdTeamTemplatesKey(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/teamTemplates', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdTeamTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdTeamTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].teamTemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdTeamTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdTeamTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].teamTemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/teamTemplates/:team_template_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].teamTemplates[':team_template_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].teamTemplates[':team_template_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdWorkgroupMembersKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/workgroupMembers', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdWorkgroupMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdWorkgroupMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].workgroupMembers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdWorkgroupMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']>
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
        ? getGetV1WorkgroupsWorkgroupIdWorkgroupMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workgroups[':workgroup_id'].workgroupMembers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdKey(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
  >,
) {
  return ['v1', '/v1/workgroups/:workgroup_id/workgroupMembers/:user_id', args] as const
}

export function useGetV1WorkgroupsWorkgroupIdWorkgroupMembersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].workgroupMembers[':user_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkgroupsWorkgroupIdWorkgroupMembersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdKey(args)
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
                (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
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
          client.v1.workgroups[':workgroup_id'].workgroupMembers[':user_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
