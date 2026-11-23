import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRepositoryKey() {
  return ['repository'] as const
}

export function getRepositoryEntryShowQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.entry.show.$get>>,
) {
  return ['repository', '/repository/entry/show', toValue(args)] as const
}

export function getRepositoryEntryShowQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.entry.show.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoryEntryShowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.entry.show.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoryEntryShow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repository.entry.show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.entry.show.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.repository.entry.show.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.repository.entry.show.$get>>>
            >
          >,
          ReturnType<typeof getRepositoryEntryShowQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.entry.show.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoryEntryShowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoryEntryShowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.entry.show.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchType2017BoulderElectionExpendituresQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
    >
  >,
) {
  return [
    'repository',
    '/repository/search/type/2017_boulder_election_expenditures',
    toValue(args),
  ] as const
}

export function getRepositorySearchType2017BoulderElectionExpendituresQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchType2017BoulderElectionExpendituresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type['2017_boulder_election_expenditures'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchType2017BoulderElectionExpenditures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
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
                    (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
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
                    (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchType2017BoulderElectionExpendituresQueryKey>
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
              (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchType2017BoulderElectionExpendituresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositorySearchType2017BoulderElectionExpendituresQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type['2017_boulder_election_expenditures'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeAnyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.any.$get>>,
) {
  return ['repository', '/repository/search/type/any', toValue(args)] as const
}

export function getRepositorySearchTypeAnyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.any.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeAnyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.any.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeAny<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.any.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.any.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.any.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.any.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeAnyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.any.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeAnyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeAnyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.any.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBeforeafterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.beforeafter.$get>>,
) {
  return ['repository', '/repository/search/type/beforeafter', toValue(args)] as const
}

export function getRepositorySearchTypeBeforeafterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.beforeafter.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBeforeafterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.beforeafter.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBeforeafter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.beforeafter.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.beforeafter.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.beforeafter.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.beforeafter.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBeforeafterQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.beforeafter.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBeforeafterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBeforeafterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.beforeafter.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBiblioQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.biblio.$get>>,
) {
  return ['repository', '/repository/search/type/biblio', toValue(args)] as const
}

export function getRepositorySearchTypeBiblioQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.biblio.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBiblioQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.biblio.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBiblio<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.biblio.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.biblio.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.biblio.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.biblio.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBiblioQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.biblio.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBiblioQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBiblioQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.biblio.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioDicomQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_dicom.$get>>,
) {
  return ['repository', '/repository/search/type/bio_dicom', toValue(args)] as const
}

export function getRepositorySearchTypeBioDicomQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_dicom.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioDicomQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_dicom.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioDicom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_dicom.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_dicom.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_dicom.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_dicom.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioDicomQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_dicom.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioDicomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioDicomQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_dicom.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioDicomTestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_dicom_test.$get>
  >,
) {
  return ['repository', '/repository/search/type/bio_dicom_test', toValue(args)] as const
}

export function getRepositorySearchTypeBioDicomTestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_dicom_test.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioDicomTestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_dicom_test.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioDicomTest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_dicom_test.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_dicom_test.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_dicom_test.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_dicom_test.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioDicomTestQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_dicom_test.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioDicomTestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioDicomTestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_dicom_test.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioFastaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_fasta.$get>>,
) {
  return ['repository', '/repository/search/type/bio_fasta', toValue(args)] as const
}

export function getRepositorySearchTypeBioFastaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_fasta.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioFastaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_fasta.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioFasta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_fasta.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_fasta.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_fasta.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_fasta.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioFastaQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_fasta.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioFastaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioFastaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_fasta.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioFastqQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_fastq.$get>>,
) {
  return ['repository', '/repository/search/type/bio_fastq', toValue(args)] as const
}

export function getRepositorySearchTypeBioFastqQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_fastq.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioFastqQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_fastq.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioFastq<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_fastq.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_fastq.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_fastq.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_fastq.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioFastqQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_fastq.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioFastqQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioFastqQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_fastq.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioHmmerIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_hmmer_index.$get>
  >,
) {
  return ['repository', '/repository/search/type/bio_hmmer_index', toValue(args)] as const
}

export function getRepositorySearchTypeBioHmmerIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_hmmer_index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioHmmerIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_hmmer_index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioHmmerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_hmmer_index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_hmmer_index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_hmmer_index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_hmmer_index.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioHmmerIndexQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_hmmer_index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioHmmerIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioHmmerIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_hmmer_index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioOmeTiffQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_ome_tiff.$get>>,
) {
  return ['repository', '/repository/search/type/bio_ome_tiff', toValue(args)] as const
}

export function getRepositorySearchTypeBioOmeTiffQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_ome_tiff.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioOmeTiffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_ome_tiff.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioOmeTiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ome_tiff.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_ome_tiff.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_ome_tiff.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_ome_tiff.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioOmeTiffQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_ome_tiff.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioOmeTiffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioOmeTiffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_ome_tiff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioOntologyAssayQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_assay.$get>
  >,
) {
  return ['repository', '/repository/search/type/bio_ontology_assay', toValue(args)] as const
}

export function getRepositorySearchTypeBioOntologyAssayQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_assay.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioOntologyAssayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_ontology_assay.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioOntologyAssay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_assay.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_assay.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_assay.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_assay.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioOntologyAssayQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_assay.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioOntologyAssayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioOntologyAssayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_ontology_assay.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioOntologyCohortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_cohort.$get>
  >,
) {
  return ['repository', '/repository/search/type/bio_ontology_cohort', toValue(args)] as const
}

export function getRepositorySearchTypeBioOntologyCohortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_cohort.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioOntologyCohortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_ontology_cohort.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioOntologyCohort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_cohort.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_cohort.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_cohort.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_cohort.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioOntologyCohortQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_cohort.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioOntologyCohortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioOntologyCohortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_ontology_cohort.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioOntologyPersonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_person.$get>
  >,
) {
  return ['repository', '/repository/search/type/bio_ontology_person', toValue(args)] as const
}

export function getRepositorySearchTypeBioOntologyPersonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_person.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioOntologyPersonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_ontology_person.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioOntologyPerson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_person.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_person.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_person.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_person.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioOntologyPersonQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_person.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioOntologyPersonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioOntologyPersonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_ontology_person.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioOntologySampleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_sample.$get>
  >,
) {
  return ['repository', '/repository/search/type/bio_ontology_sample', toValue(args)] as const
}

export function getRepositorySearchTypeBioOntologySampleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_sample.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioOntologySampleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_ontology_sample.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioOntologySample<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_sample.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_sample.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_sample.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_sample.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioOntologySampleQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_sample.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioOntologySampleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioOntologySampleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_ontology_sample.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioOntologySeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_series.$get>
  >,
) {
  return ['repository', '/repository/search/type/bio_ontology_series', toValue(args)] as const
}

export function getRepositorySearchTypeBioOntologySeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_series.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioOntologySeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_ontology_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioOntologySeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_series.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_series.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_series.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioOntologySeriesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_series.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioOntologySeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioOntologySeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_ontology_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioOntologyStudyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_study.$get>
  >,
) {
  return ['repository', '/repository/search/type/bio_ontology_study', toValue(args)] as const
}

export function getRepositorySearchTypeBioOntologyStudyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_study.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioOntologyStudyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_ontology_study.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioOntologyStudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_study.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bio_ontology_study.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_study.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_study.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioOntologyStudyQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_study.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioOntologyStudyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioOntologyStudyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_ontology_study.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioSamQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_sam.$get>>,
) {
  return ['repository', '/repository/search/type/bio_sam', toValue(args)] as const
}

export function getRepositorySearchTypeBioSamQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_sam.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioSamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_sam.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioSam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_sam.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_sam.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_sam.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_sam.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioSamQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_sam.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioSamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioSamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_sam.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioSfPdbQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_sf_pdb.$get>>,
) {
  return ['repository', '/repository/search/type/bio_sf_pdb', toValue(args)] as const
}

export function getRepositorySearchTypeBioSfPdbQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_sf_pdb.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioSfPdbQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_sf_pdb.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioSfPdb<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_sf_pdb.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_sf_pdb.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_sf_pdb.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_sf_pdb.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioSfPdbQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_sf_pdb.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioSfPdbQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioSfPdbQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_sf_pdb.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioSraQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_sra.$get>>,
) {
  return ['repository', '/repository/search/type/bio_sra', toValue(args)] as const
}

export function getRepositorySearchTypeBioSraQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_sra.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioSraQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_sra.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioSra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_sra.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_sra.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_sra.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_sra.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioSraQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_sra.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioSraQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioSraQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_sra.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioStockholmQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_stockholm.$get>>,
) {
  return ['repository', '/repository/search/type/bio_stockholm', toValue(args)] as const
}

export function getRepositorySearchTypeBioStockholmQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_stockholm.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioStockholmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_stockholm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioStockholm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_stockholm.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_stockholm.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_stockholm.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_stockholm.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioStockholmQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_stockholm.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioStockholmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioStockholmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_stockholm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBioTaxonomyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_taxonomy.$get>>,
) {
  return ['repository', '/repository/search/type/bio_taxonomy', toValue(args)] as const
}

export function getRepositorySearchTypeBioTaxonomyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_taxonomy.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBioTaxonomyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bio_taxonomy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBioTaxonomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_taxonomy.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bio_taxonomy.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_taxonomy.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bio_taxonomy.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBioTaxonomyQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bio_taxonomy.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioTaxonomyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBioTaxonomyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bio_taxonomy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBlogentryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.blogentry.$get>>,
) {
  return ['repository', '/repository/search/type/blogentry', toValue(args)] as const
}

export function getRepositorySearchTypeBlogentryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.blogentry.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBlogentryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.blogentry.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBlogentry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.blogentry.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.blogentry.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.blogentry.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.blogentry.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBlogentryQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.blogentry.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBlogentryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBlogentryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.blogentry.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBolderRentalHousingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bolder_rental_housing.$get>
  >,
) {
  return ['repository', '/repository/search/type/bolder_rental_housing', toValue(args)] as const
}

export function getRepositorySearchTypeBolderRentalHousingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bolder_rental_housing.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBolderRentalHousingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bolder_rental_housing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBolderRentalHousing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bolder_rental_housing.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.bolder_rental_housing.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bolder_rental_housing.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bolder_rental_housing.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBolderRentalHousingQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bolder_rental_housing.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBolderRentalHousingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBolderRentalHousingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bolder_rental_housing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBookmarksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bookmarks.$get>>,
) {
  return ['repository', '/repository/search/type/bookmarks', toValue(args)] as const
}

export function getRepositorySearchTypeBookmarksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bookmarks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBookmarksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.bookmarks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bookmarks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.bookmarks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bookmarks.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.bookmarks.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBookmarksQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.bookmarks.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBookmarksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBookmarksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.bookmarks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBostonCrimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.boston_crime.$get>>,
) {
  return ['repository', '/repository/search/type/boston_crime', toValue(args)] as const
}

export function getRepositorySearchTypeBostonCrimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.boston_crime.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBostonCrimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.boston_crime.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBostonCrime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boston_crime.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.boston_crime.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.boston_crime.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.boston_crime.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBostonCrimeQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.boston_crime.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBostonCrimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBostonCrimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.boston_crime.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBoulder2017ElectionContributionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_2017_election_contributions.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/boulder_2017_election_contributions',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeBoulder2017ElectionContributionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_2017_election_contributions.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBoulder2017ElectionContributionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.boulder_2017_election_contributions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBoulder2017ElectionContributions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.repository.search.type.boulder_2017_election_contributions.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_2017_election_contributions.$get>
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
                    typeof client.repository.search.type.boulder_2017_election_contributions.$get
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
                    typeof client.repository.search.type.boulder_2017_election_contributions.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBoulder2017ElectionContributionsQueryKey>
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
              typeof client.repository.search.type.boulder_2017_election_contributions.$get
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBoulder2017ElectionContributionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositorySearchTypeBoulder2017ElectionContributionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.boulder_2017_election_contributions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBoulderCampaignContributionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_campaign_contributions.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/boulder_campaign_contributions',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeBoulderCampaignContributionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_campaign_contributions.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBoulderCampaignContributionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.boulder_campaign_contributions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBoulderCampaignContributions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.repository.search.type.boulder_campaign_contributions.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_campaign_contributions.$get>
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
                    typeof client.repository.search.type.boulder_campaign_contributions.$get
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
                    typeof client.repository.search.type.boulder_campaign_contributions.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBoulderCampaignContributionsQueryKey>
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
            ReturnType<typeof client.repository.search.type.boulder_campaign_contributions.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBoulderCampaignContributionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBoulderCampaignContributionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.boulder_campaign_contributions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBoulderConsultingServicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_consulting_services.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/boulder_consulting_services',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeBoulderConsultingServicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_consulting_services.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBoulderConsultingServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.boulder_consulting_services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBoulderConsultingServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_consulting_services.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_consulting_services.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.boulder_consulting_services.$get>
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
                  ReturnType<typeof client.repository.search.type.boulder_consulting_services.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBoulderConsultingServicesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.boulder_consulting_services.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBoulderConsultingServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBoulderConsultingServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.boulder_consulting_services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBoulderCountyVoterDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_county_voter_details.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/boulder_county_voter_details',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeBoulderCountyVoterDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_county_voter_details.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBoulderCountyVoterDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.boulder_county_voter_details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBoulderCountyVoterDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_county_voter_details.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_county_voter_details.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.boulder_county_voter_details.$get>
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
                  ReturnType<typeof client.repository.search.type.boulder_county_voter_details.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBoulderCountyVoterDetailsQueryKey>
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
            ReturnType<typeof client.repository.search.type.boulder_county_voter_details.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBoulderCountyVoterDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBoulderCountyVoterDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.boulder_county_voter_details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBoulderCrimesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_crimes.$get>
  >,
) {
  return ['repository', '/repository/search/type/boulder_crimes', toValue(args)] as const
}

export function getRepositorySearchTypeBoulderCrimesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_crimes.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBoulderCrimesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.boulder_crimes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBoulderCrimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_crimes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_crimes.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.boulder_crimes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.boulder_crimes.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBoulderCrimesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.boulder_crimes.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBoulderCrimesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBoulderCrimesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.boulder_crimes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBoulderEmailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_emails.$get>
  >,
) {
  return ['repository', '/repository/search/type/boulder_emails', toValue(args)] as const
}

export function getRepositorySearchTypeBoulderEmailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_emails.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBoulderEmailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.boulder_emails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBoulderEmails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_emails.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_emails.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.boulder_emails.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.boulder_emails.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBoulderEmailsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.boulder_emails.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBoulderEmailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBoulderEmailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.boulder_emails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeBoulderEmployeeSalariesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_employee_salaries.$get>
  >,
) {
  return ['repository', '/repository/search/type/boulder_employee_salaries', toValue(args)] as const
}

export function getRepositorySearchTypeBoulderEmployeeSalariesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_employee_salaries.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeBoulderEmployeeSalariesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.boulder_employee_salaries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeBoulderEmployeeSalaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_employee_salaries.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.boulder_employee_salaries.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.boulder_employee_salaries.$get>
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
                  ReturnType<typeof client.repository.search.type.boulder_employee_salaries.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeBoulderEmployeeSalariesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.boulder_employee_salaries.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBoulderEmployeeSalariesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeBoulderEmployeeSalariesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.boulder_employee_salaries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeCalendarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.calendar.$get>>,
) {
  return ['repository', '/repository/search/type/calendar', toValue(args)] as const
}

export function getRepositorySearchTypeCalendarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.calendar.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeCalendarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.calendar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeCalendar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.calendar.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.calendar.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.calendar.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.calendar.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeCalendarQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.calendar.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeCalendarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeCalendarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.calendar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeCampaignDonorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.campaign_donors.$get>
  >,
) {
  return ['repository', '/repository/search/type/campaign_donors', toValue(args)] as const
}

export function getRepositorySearchTypeCampaignDonorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.campaign_donors.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeCampaignDonorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.campaign_donors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeCampaignDonors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.campaign_donors.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.campaign_donors.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.campaign_donors.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.campaign_donors.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeCampaignDonorsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.campaign_donors.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeCampaignDonorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeCampaignDonorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.campaign_donors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeCampaignExpendituresQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.campaign_expenditures.$get>
  >,
) {
  return ['repository', '/repository/search/type/campaign_expenditures', toValue(args)] as const
}

export function getRepositorySearchTypeCampaignExpendituresQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.campaign_expenditures.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeCampaignExpendituresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.campaign_expenditures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeCampaignExpenditures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.campaign_expenditures.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.campaign_expenditures.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.campaign_expenditures.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.campaign_expenditures.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeCampaignExpendituresQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.campaign_expenditures.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeCampaignExpendituresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeCampaignExpendituresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.campaign_expenditures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeCataloglinkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.cataloglink.$get>>,
) {
  return ['repository', '/repository/search/type/cataloglink', toValue(args)] as const
}

export function getRepositorySearchTypeCataloglinkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.cataloglink.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeCataloglinkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.cataloglink.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeCataloglink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.cataloglink.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.cataloglink.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.cataloglink.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.cataloglink.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeCataloglinkQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.cataloglink.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeCataloglinkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeCataloglinkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.cataloglink.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeCdmGridQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.cdm_grid.$get>>,
) {
  return ['repository', '/repository/search/type/cdm_grid', toValue(args)] as const
}

export function getRepositorySearchTypeCdmGridQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.cdm_grid.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeCdmGridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.cdm_grid.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeCdmGrid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.cdm_grid.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.cdm_grid.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.cdm_grid.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.cdm_grid.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeCdmGridQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.cdm_grid.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeCdmGridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeCdmGridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.cdm_grid.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeChatroomQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.chatroom.$get>>,
) {
  return ['repository', '/repository/search/type/chatroom', toValue(args)] as const
}

export function getRepositorySearchTypeChatroomQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.chatroom.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeChatroomQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.chatroom.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeChatroom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.chatroom.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.chatroom.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.chatroom.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.chatroom.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeChatroomQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.chatroom.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeChatroomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeChatroomQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.chatroom.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeColoradoWaterRightsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.colorado_water_rights.$get>
  >,
) {
  return ['repository', '/repository/search/type/colorado_water_rights', toValue(args)] as const
}

export function getRepositorySearchTypeColoradoWaterRightsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.colorado_water_rights.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeColoradoWaterRightsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.colorado_water_rights.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeColoradoWaterRights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.colorado_water_rights.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.colorado_water_rights.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.colorado_water_rights.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.colorado_water_rights.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeColoradoWaterRightsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.colorado_water_rights.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeColoradoWaterRightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeColoradoWaterRightsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.colorado_water_rights.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeCommitteeDonationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.committee_donations.$get>
  >,
) {
  return ['repository', '/repository/search/type/committee_donations', toValue(args)] as const
}

export function getRepositorySearchTypeCommitteeDonationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.committee_donations.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeCommitteeDonationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.committee_donations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeCommitteeDonations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.committee_donations.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.committee_donations.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.committee_donations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.committee_donations.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeCommitteeDonationsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.committee_donations.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeCommitteeDonationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeCommitteeDonationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.committee_donations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeCommunityDatahubQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.community_datahub.$get>
  >,
) {
  return ['repository', '/repository/search/type/community_datahub', toValue(args)] as const
}

export function getRepositorySearchTypeCommunityDatahubQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.community_datahub.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeCommunityDatahubQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.community_datahub.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeCommunityDatahub<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.community_datahub.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.community_datahub.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.community_datahub.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.community_datahub.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeCommunityDatahubQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.community_datahub.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeCommunityDatahubQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeCommunityDatahubQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.community_datahub.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeCommunityResourceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.community_resource.$get>
  >,
) {
  return ['repository', '/repository/search/type/community_resource', toValue(args)] as const
}

export function getRepositorySearchTypeCommunityResourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.community_resource.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeCommunityResourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.community_resource.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeCommunityResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.community_resource.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.community_resource.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.community_resource.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.community_resource.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeCommunityResourceQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.community_resource.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeCommunityResourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeCommunityResourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.community_resource.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeConstructionPermitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.construction_permits.$get>
  >,
) {
  return ['repository', '/repository/search/type/construction_permits', toValue(args)] as const
}

export function getRepositorySearchTypeConstructionPermitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.construction_permits.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeConstructionPermitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.construction_permits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeConstructionPermits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.construction_permits.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.construction_permits.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.construction_permits.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.construction_permits.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeConstructionPermitsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.construction_permits.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeConstructionPermitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeConstructionPermitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.construction_permits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeContactQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.contact.$get>>,
) {
  return ['repository', '/repository/search/type/contact', toValue(args)] as const
}

export function getRepositorySearchTypeContactQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.contact.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeContactQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.contact.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.contact.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.contact.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.contact.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.contact.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeContactQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.contact.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeContactQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeContactQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.contact.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeDbCoIndicatorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.db_co_indicators.$get>
  >,
) {
  return ['repository', '/repository/search/type/db_co_indicators', toValue(args)] as const
}

export function getRepositorySearchTypeDbCoIndicatorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.db_co_indicators.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeDbCoIndicatorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.db_co_indicators.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeDbCoIndicators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.db_co_indicators.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.db_co_indicators.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.db_co_indicators.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.db_co_indicators.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeDbCoIndicatorsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.db_co_indicators.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeDbCoIndicatorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeDbCoIndicatorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.db_co_indicators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeEarthSatelliteLandsatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.earth_satellite_landsat.$get>
  >,
) {
  return ['repository', '/repository/search/type/earth_satellite_landsat', toValue(args)] as const
}

export function getRepositorySearchTypeEarthSatelliteLandsatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.earth_satellite_landsat.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeEarthSatelliteLandsatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.earth_satellite_landsat.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeEarthSatelliteLandsat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.earth_satellite_landsat.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.earth_satellite_landsat.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.earth_satellite_landsat.$get>
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
                  ReturnType<typeof client.repository.search.type.earth_satellite_landsat.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeEarthSatelliteLandsatQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.earth_satellite_landsat.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeEarthSatelliteLandsatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeEarthSatelliteLandsatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.earth_satellite_landsat.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeFaqQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.faq.$get>>,
) {
  return ['repository', '/repository/search/type/faq', toValue(args)] as const
}

export function getRepositorySearchTypeFaqQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.faq.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeFaqQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.faq.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeFaq<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.faq.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.faq.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.faq.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.faq.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeFaqQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.faq.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeFaqQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeFaqQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.faq.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeFecPacsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.fec_pacs.$get>>,
) {
  return ['repository', '/repository/search/type/fec_pacs', toValue(args)] as const
}

export function getRepositorySearchTypeFecPacsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.fec_pacs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeFecPacsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.fec_pacs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeFecPacs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.fec_pacs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.fec_pacs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.fec_pacs.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.fec_pacs.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeFecPacsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.fec_pacs.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeFecPacsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeFecPacsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.fec_pacs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeFeccandidatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.feccandidates.$get>>,
) {
  return ['repository', '/repository/search/type/feccandidates', toValue(args)] as const
}

export function getRepositorySearchTypeFeccandidatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.feccandidates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeFeccandidatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.feccandidates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeFeccandidates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.feccandidates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.feccandidates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.feccandidates.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.feccandidates.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeFeccandidatesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.feccandidates.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeFeccandidatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeFeccandidatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.feccandidates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeFeedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.feed.$get>>,
) {
  return ['repository', '/repository/search/type/feed', toValue(args)] as const
}

export function getRepositorySearchTypeFeedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.feed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeFeedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.feed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeFeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.feed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.feed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.feed.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.feed.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeFeedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.feed.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeFeedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeFeedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.feed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeFileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.file.$get>>,
) {
  return ['repository', '/repository/search/type/file', toValue(args)] as const
}

export function getRepositorySearchTypeFileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.file.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.file.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.file.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.file.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.file.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeFileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.file.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeFitsDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.fits_data.$get>>,
) {
  return ['repository', '/repository/search/type/fits_data', toValue(args)] as const
}

export function getRepositorySearchTypeFitsDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.fits_data.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeFitsDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.fits_data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeFitsData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.fits_data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.fits_data.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.fits_data.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.fits_data.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeFitsDataQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.fits_data.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeFitsDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeFitsDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.fits_data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeFtpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.ftp.$get>>,
) {
  return ['repository', '/repository/search/type/ftp', toValue(args)] as const
}

export function getRepositorySearchTypeFtpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.ftp.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeFtpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.ftp.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeFtp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.ftp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.ftp.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.ftp.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.ftp.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeFtpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.ftp.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeFtpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeFtpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.ftp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGadgetsCountdownQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gadgets_countdown.$get>
  >,
) {
  return ['repository', '/repository/search/type/gadgets_countdown', toValue(args)] as const
}

export function getRepositorySearchTypeGadgetsCountdownQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gadgets_countdown.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGadgetsCountdownQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.gadgets_countdown.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGadgetsCountdown<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gadgets_countdown.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gadgets_countdown.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.gadgets_countdown.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.gadgets_countdown.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGadgetsCountdownQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.gadgets_countdown.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGadgetsCountdownQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGadgetsCountdownQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.gadgets_countdown.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGadgetsStockQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.gadgets_stock.$get>>,
) {
  return ['repository', '/repository/search/type/gadgets_stock', toValue(args)] as const
}

export function getRepositorySearchTypeGadgetsStockQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.gadgets_stock.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGadgetsStockQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.gadgets_stock.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGadgetsStock<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gadgets_stock.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.gadgets_stock.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.gadgets_stock.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.gadgets_stock.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGadgetsStockQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.gadgets_stock.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGadgetsStockQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGadgetsStockQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.gadgets_stock.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGadgetsWeatherQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gadgets_weather.$get>
  >,
) {
  return ['repository', '/repository/search/type/gadgets_weather', toValue(args)] as const
}

export function getRepositorySearchTypeGadgetsWeatherQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gadgets_weather.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGadgetsWeatherQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.gadgets_weather.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGadgetsWeather<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gadgets_weather.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gadgets_weather.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.gadgets_weather.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.gadgets_weather.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGadgetsWeatherQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.gadgets_weather.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGadgetsWeatherQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGadgetsWeatherQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.gadgets_weather.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGazeteerCensusTractsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gazeteer_census_tracts.$get>
  >,
) {
  return ['repository', '/repository/search/type/gazeteer_census_tracts', toValue(args)] as const
}

export function getRepositorySearchTypeGazeteerCensusTractsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gazeteer_census_tracts.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGazeteerCensusTractsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.gazeteer_census_tracts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGazeteerCensusTracts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gazeteer_census_tracts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gazeteer_census_tracts.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.gazeteer_census_tracts.$get>
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
                  ReturnType<typeof client.repository.search.type.gazeteer_census_tracts.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGazeteerCensusTractsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.gazeteer_census_tracts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGazeteerCensusTractsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGazeteerCensusTractsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.gazeteer_census_tracts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGazeteerCountiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gazeteer_counties.$get>
  >,
) {
  return ['repository', '/repository/search/type/gazeteer_counties', toValue(args)] as const
}

export function getRepositorySearchTypeGazeteerCountiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gazeteer_counties.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGazeteerCountiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.gazeteer_counties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGazeteerCounties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gazeteer_counties.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gazeteer_counties.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.gazeteer_counties.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.gazeteer_counties.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGazeteerCountiesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.gazeteer_counties.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGazeteerCountiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGazeteerCountiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.gazeteer_counties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGeoGeojsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_geojson.$get>>,
) {
  return ['repository', '/repository/search/type/geo_geojson', toValue(args)] as const
}

export function getRepositorySearchTypeGeoGeojsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_geojson.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGeoGeojsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.geo_geojson.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGeoGeojson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.geo_geojson.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_geojson.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.geo_geojson.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.geo_geojson.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGeoGeojsonQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.geo_geojson.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGeoGeojsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGeoGeojsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.geo_geojson.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGeoGeotiffQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_geotiff.$get>>,
) {
  return ['repository', '/repository/search/type/geo_geotiff', toValue(args)] as const
}

export function getRepositorySearchTypeGeoGeotiffQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_geotiff.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGeoGeotiffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.geo_geotiff.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGeoGeotiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.geo_geotiff.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_geotiff.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.geo_geotiff.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.geo_geotiff.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGeoGeotiffQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.geo_geotiff.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGeoGeotiffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGeoGeotiffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.geo_geotiff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGeoGpxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_gpx.$get>>,
) {
  return ['repository', '/repository/search/type/geo_gpx', toValue(args)] as const
}

export function getRepositorySearchTypeGeoGpxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_gpx.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGeoGpxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.geo_gpx.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGeoGpx<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.geo_gpx.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_gpx.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.geo_gpx.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.geo_gpx.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGeoGpxQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.geo_gpx.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGeoGpxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGeoGpxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.geo_gpx.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGeoHdf5QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_hdf5.$get>>,
) {
  return ['repository', '/repository/search/type/geo_hdf5', toValue(args)] as const
}

export function getRepositorySearchTypeGeoHdf5QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_hdf5.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGeoHdf5QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.geo_hdf5.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGeoHdf5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.geo_hdf5.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_hdf5.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.geo_hdf5.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.geo_hdf5.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGeoHdf5QueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.geo_hdf5.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGeoHdf5QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGeoHdf5QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.geo_hdf5.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGeoKmlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_kml.$get>>,
) {
  return ['repository', '/repository/search/type/geo_kml', toValue(args)] as const
}

export function getRepositorySearchTypeGeoKmlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_kml.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGeoKmlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.geo_kml.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGeoKml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.geo_kml.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_kml.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.geo_kml.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.geo_kml.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGeoKmlQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.geo_kml.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGeoKmlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGeoKmlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.geo_kml.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGeoShapefileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_shapefile.$get>>,
) {
  return ['repository', '/repository/search/type/geo_shapefile', toValue(args)] as const
}

export function getRepositorySearchTypeGeoShapefileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_shapefile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGeoShapefileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.geo_shapefile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGeoShapefile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.geo_shapefile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGeoShapefileQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGeoShapefileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGeoShapefileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.geo_shapefile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGeoShapefileFipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.geo_shapefile_fips.$get>
  >,
) {
  return ['repository', '/repository/search/type/geo_shapefile_fips', toValue(args)] as const
}

export function getRepositorySearchTypeGeoShapefileFipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.geo_shapefile_fips.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGeoShapefileFipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.geo_shapefile_fips.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGeoShapefileFips<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile_fips.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.geo_shapefile_fips.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile_fips.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile_fips.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGeoShapefileFipsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile_fips.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGeoShapefileFipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGeoShapefileFipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.geo_shapefile_fips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGlossaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.glossary.$get>>,
) {
  return ['repository', '/repository/search/type/glossary', toValue(args)] as const
}

export function getRepositorySearchTypeGlossaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.glossary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGlossaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.glossary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGlossary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.glossary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.glossary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.glossary.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.glossary.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGlossaryQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.glossary.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGlossaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGlossaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.glossary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGridaggregationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gridaggregation.$get>
  >,
) {
  return ['repository', '/repository/search/type/gridaggregation', toValue(args)] as const
}

export function getRepositorySearchTypeGridaggregationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gridaggregation.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGridaggregationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.gridaggregation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGridaggregation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gridaggregation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.gridaggregation.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.gridaggregation.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.gridaggregation.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGridaggregationQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.gridaggregation.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGridaggregationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGridaggregationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.gridaggregation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.group.$get>>,
) {
  return ['repository', '/repository/search/type/group', toValue(args)] as const
}

export function getRepositorySearchTypeGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.group.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.group.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.group.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.group.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.group.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.group.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeGroupQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.group.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.group.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeHipchatGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.hipchat_group.$get>>,
) {
  return ['repository', '/repository/search/type/hipchat_group', toValue(args)] as const
}

export function getRepositorySearchTypeHipchatGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.hipchat_group.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeHipchatGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.hipchat_group.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeHipchatGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.hipchat_group.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.hipchat_group.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.hipchat_group.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.hipchat_group.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeHipchatGroupQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.hipchat_group.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeHipchatGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeHipchatGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.hipchat_group.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeHomepageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.homepage.$get>>,
) {
  return ['repository', '/repository/search/type/homepage', toValue(args)] as const
}

export function getRepositorySearchTypeHomepageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.homepage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeHomepageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.homepage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeHomepage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.homepage.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.homepage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.homepage.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.homepage.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeHomepageQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.homepage.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeHomepageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeHomepageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.homepage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeIncidentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.incident.$get>>,
) {
  return ['repository', '/repository/search/type/incident', toValue(args)] as const
}

export function getRepositorySearchTypeIncidentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.incident.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeIncidentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.incident.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeIncident<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.incident.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.incident.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.incident.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.incident.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeIncidentQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.incident.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeIncidentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeIncidentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.incident.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeJeopardyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.jeopardy.$get>>,
) {
  return ['repository', '/repository/search/type/jeopardy', toValue(args)] as const
}

export function getRepositorySearchTypeJeopardyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.jeopardy.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeJeopardyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.jeopardy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeJeopardy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.jeopardy.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.jeopardy.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.jeopardy.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.jeopardy.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeJeopardyQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.jeopardy.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeJeopardyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeJeopardyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.jeopardy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeLatlonimageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.latlonimage.$get>>,
) {
  return ['repository', '/repository/search/type/latlonimage', toValue(args)] as const
}

export function getRepositorySearchTypeLatlonimageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.latlonimage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeLatlonimageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.latlonimage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeLatlonimage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.latlonimage.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.latlonimage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.latlonimage.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.latlonimage.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeLatlonimageQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.latlonimage.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeLatlonimageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeLatlonimageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.latlonimage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeLidarCollectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.lidar_collection.$get>
  >,
) {
  return ['repository', '/repository/search/type/lidar_collection', toValue(args)] as const
}

export function getRepositorySearchTypeLidarCollectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.lidar_collection.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeLidarCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.lidar_collection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeLidarCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.lidar_collection.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.lidar_collection.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.lidar_collection.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.lidar_collection.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeLidarCollectionQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.lidar_collection.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeLidarCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeLidarCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.lidar_collection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeLidarLasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.lidar_las.$get>>,
) {
  return ['repository', '/repository/search/type/lidar_las', toValue(args)] as const
}

export function getRepositorySearchTypeLidarLasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.lidar_las.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeLidarLasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.lidar_las.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeLidarLas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.lidar_las.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.lidar_las.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.lidar_las.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.lidar_las.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeLidarLasQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.lidar_las.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeLidarLasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeLidarLasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.lidar_las.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeLidarLvisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.lidar_lvis.$get>>,
) {
  return ['repository', '/repository/search/type/lidar_lvis', toValue(args)] as const
}

export function getRepositorySearchTypeLidarLvisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.lidar_lvis.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeLidarLvisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.lidar_lvis.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeLidarLvis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.lidar_lvis.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.lidar_lvis.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.lidar_lvis.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.lidar_lvis.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeLidarLvisQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.lidar_lvis.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeLidarLvisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeLidarLvisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.lidar_lvis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeLinkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.link.$get>>,
) {
  return ['repository', '/repository/search/type/link', toValue(args)] as const
}

export function getRepositorySearchTypeLinkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.link.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeLinkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.link.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.link.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.link.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.link.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.link.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeLinkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.link.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeLinkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeLinkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.link.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeLocalfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.localfiles.$get>>,
) {
  return ['repository', '/repository/search/type/localfiles', toValue(args)] as const
}

export function getRepositorySearchTypeLocalfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.localfiles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeLocalfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.localfiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeLocalfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.localfiles.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.localfiles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.localfiles.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.localfiles.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeLocalfilesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.localfiles.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeLocalfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeLocalfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.localfiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.locations.$get>>,
) {
  return ['repository', '/repository/search/type/locations', toValue(args)] as const
}

export function getRepositorySearchTypeLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.locations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.locations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.locations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.locations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.locations.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeLocationsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.locations.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeMapGooglemapQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.map_googlemap.$get>>,
) {
  return ['repository', '/repository/search/type/map_googlemap', toValue(args)] as const
}

export function getRepositorySearchTypeMapGooglemapQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.map_googlemap.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeMapGooglemapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.map_googlemap.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeMapGooglemap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.map_googlemap.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.map_googlemap.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.map_googlemap.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.map_googlemap.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeMapGooglemapQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.map_googlemap.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeMapGooglemapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeMapGooglemapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.map_googlemap.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeMediaAudiofileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_audiofile.$get>
  >,
) {
  return ['repository', '/repository/search/type/media_audiofile', toValue(args)] as const
}

export function getRepositorySearchTypeMediaAudiofileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_audiofile.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeMediaAudiofileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.media_audiofile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeMediaAudiofile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_audiofile.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_audiofile.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.media_audiofile.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.media_audiofile.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeMediaAudiofileQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.media_audiofile.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeMediaAudiofileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeMediaAudiofileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.media_audiofile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeMediaImageloopQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_imageloop.$get>
  >,
) {
  return ['repository', '/repository/search/type/media_imageloop', toValue(args)] as const
}

export function getRepositorySearchTypeMediaImageloopQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_imageloop.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeMediaImageloopQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.media_imageloop.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeMediaImageloop<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_imageloop.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_imageloop.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.media_imageloop.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.media_imageloop.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeMediaImageloopQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.media_imageloop.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeMediaImageloopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeMediaImageloopQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.media_imageloop.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeMediaPhotoalbumQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_photoalbum.$get>
  >,
) {
  return ['repository', '/repository/search/type/media_photoalbum', toValue(args)] as const
}

export function getRepositorySearchTypeMediaPhotoalbumQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_photoalbum.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeMediaPhotoalbumQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.media_photoalbum.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeMediaPhotoalbum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_photoalbum.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_photoalbum.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.media_photoalbum.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.media_photoalbum.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeMediaPhotoalbumQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.media_photoalbum.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeMediaPhotoalbumQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeMediaPhotoalbumQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.media_photoalbum.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeMediaVideoChannelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_video_channel.$get>
  >,
) {
  return ['repository', '/repository/search/type/media_video_channel', toValue(args)] as const
}

export function getRepositorySearchTypeMediaVideoChannelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_video_channel.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeMediaVideoChannelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.media_video_channel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeMediaVideoChannel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_video_channel.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_video_channel.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.media_video_channel.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.media_video_channel.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeMediaVideoChannelQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.media_video_channel.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeMediaVideoChannelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeMediaVideoChannelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.media_video_channel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeMediaVideoQuicktimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_video_quicktime.$get>
  >,
) {
  return ['repository', '/repository/search/type/media_video_quicktime', toValue(args)] as const
}

export function getRepositorySearchTypeMediaVideoQuicktimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_video_quicktime.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeMediaVideoQuicktimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.media_video_quicktime.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeMediaVideoQuicktime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_video_quicktime.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_video_quicktime.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.media_video_quicktime.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.media_video_quicktime.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeMediaVideoQuicktimeQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.media_video_quicktime.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeMediaVideoQuicktimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeMediaVideoQuicktimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.media_video_quicktime.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeMediaYoutubevideoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_youtubevideo.$get>
  >,
) {
  return ['repository', '/repository/search/type/media_youtubevideo', toValue(args)] as const
}

export function getRepositorySearchTypeMediaYoutubevideoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_youtubevideo.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeMediaYoutubevideoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.media_youtubevideo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeMediaYoutubevideo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_youtubevideo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.media_youtubevideo.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.media_youtubevideo.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.media_youtubevideo.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeMediaYoutubevideoQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.media_youtubevideo.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeMediaYoutubevideoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeMediaYoutubevideoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.media_youtubevideo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeNotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.notes.$get>>,
) {
  return ['repository', '/repository/search/type/notes', toValue(args)] as const
}

export function getRepositorySearchTypeNotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.notes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.notes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.notes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.notes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.notes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.notes.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeNotesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.notes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeNotesJsonfileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.notes_jsonfile.$get>
  >,
) {
  return ['repository', '/repository/search/type/notes_jsonfile', toValue(args)] as const
}

export function getRepositorySearchTypeNotesJsonfileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.notes_jsonfile.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeNotesJsonfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.notes_jsonfile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeNotesJsonfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.notes_jsonfile.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.notes_jsonfile.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.notes_jsonfile.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.notes_jsonfile.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeNotesJsonfileQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.notes_jsonfile.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeNotesJsonfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeNotesJsonfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.notes_jsonfile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeNotesNoteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.notes_note.$get>>,
) {
  return ['repository', '/repository/search/type/notes_note', toValue(args)] as const
}

export function getRepositorySearchTypeNotesNoteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.notes_note.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeNotesNoteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.notes_note.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeNotesNote<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.notes_note.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.notes_note.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.notes_note.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.notes_note.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeNotesNoteQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.notes_note.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeNotesNoteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeNotesNoteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.notes_note.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeNotesNotebookQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.notes_notebook.$get>
  >,
) {
  return ['repository', '/repository/search/type/notes_notebook', toValue(args)] as const
}

export function getRepositorySearchTypeNotesNotebookQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.notes_notebook.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeNotesNotebookQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.notes_notebook.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeNotesNotebook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.notes_notebook.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.notes_notebook.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.notes_notebook.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.notes_notebook.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeNotesNotebookQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.notes_notebook.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeNotesNotebookQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeNotesNotebookQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.notes_notebook.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeNwsfeedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.nwsfeed.$get>>,
) {
  return ['repository', '/repository/search/type/nwsfeed', toValue(args)] as const
}

export function getRepositorySearchTypeNwsfeedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.nwsfeed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeNwsfeedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.nwsfeed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeNwsfeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.nwsfeed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.nwsfeed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.nwsfeed.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.nwsfeed.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeNwsfeedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.nwsfeed.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeNwsfeedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeNwsfeedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.nwsfeed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeOpendaplinkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.opendaplink.$get>>,
) {
  return ['repository', '/repository/search/type/opendaplink', toValue(args)] as const
}

export function getRepositorySearchTypeOpendaplinkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.opendaplink.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeOpendaplinkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.opendaplink.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeOpendaplink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.opendaplink.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.opendaplink.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.opendaplink.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.opendaplink.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeOpendaplinkQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.opendaplink.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeOpendaplinkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeOpendaplinkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.opendaplink.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeOwlClassQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repository.search.type)['owl.class']['$get']>
  >,
) {
  return ['repository', '/repository/search/type/owl.class', toValue(args)] as const
}

export function getRepositorySearchTypeOwlClassQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repository.search.type)['owl.class']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeOwlClassQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type['owl.class'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeOwlClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.repository.search.type)['owl.class']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repository.search.type)['owl.class']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.repository.search.type)['owl.class']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.repository.search.type)['owl.class']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeOwlClassQueryKey>
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
          Awaited<ReturnType<(typeof client.repository.search.type)['owl.class']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeOwlClassQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeOwlClassQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type['owl.class'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeOwlOntologyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repository.search.type)['owl.ontology']['$get']>
  >,
) {
  return ['repository', '/repository/search/type/owl.ontology', toValue(args)] as const
}

export function getRepositorySearchTypeOwlOntologyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repository.search.type)['owl.ontology']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeOwlOntologyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type['owl.ontology'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeOwlOntology<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.repository.search.type)['owl.ontology']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repository.search.type)['owl.ontology']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.repository.search.type)['owl.ontology']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.repository.search.type)['owl.ontology']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeOwlOntologyQueryKey>
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
          Awaited<ReturnType<(typeof client.repository.search.type)['owl.ontology']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeOwlOntologyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeOwlOntologyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type['owl.ontology'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypePasteitentryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.pasteitentry.$get>>,
) {
  return ['repository', '/repository/search/type/pasteitentry', toValue(args)] as const
}

export function getRepositorySearchTypePasteitentryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.pasteitentry.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypePasteitentryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.pasteitentry.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypePasteitentry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.pasteitentry.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.pasteitentry.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.pasteitentry.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.pasteitentry.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypePasteitentryQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.pasteitentry.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypePasteitentryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypePasteitentryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.pasteitentry.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypePointTextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.point_text.$get>>,
) {
  return ['repository', '/repository/search/type/point_text', toValue(args)] as const
}

export function getRepositorySearchTypePointTextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.point_text.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypePointTextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.point_text.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypePointText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.point_text.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.point_text.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.point_text.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.point_text.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypePointTextQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.point_text.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypePointTextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypePointTextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.point_text.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypePoliceStopDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.police_stop_data.$get>
  >,
) {
  return ['repository', '/repository/search/type/police_stop_data', toValue(args)] as const
}

export function getRepositorySearchTypePoliceStopDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.police_stop_data.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypePoliceStopDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.police_stop_data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypePoliceStopData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.police_stop_data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.police_stop_data.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.police_stop_data.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.police_stop_data.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypePoliceStopDataQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.police_stop_data.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypePoliceStopDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypePoliceStopDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.police_stop_data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypePollQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.poll.$get>>,
) {
  return ['repository', '/repository/search/type/poll', toValue(args)] as const
}

export function getRepositorySearchTypePollQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.poll.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypePollQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.poll.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypePoll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.poll.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.poll.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.poll.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.poll.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypePollQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.poll.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypePollQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypePollQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.poll.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectCampaignQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_campaign.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_campaign', toValue(args)] as const
}

export function getRepositorySearchTypeProjectCampaignQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_campaign.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectCampaignQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_campaign.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectCampaign<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_campaign.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_campaign.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_campaign.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_campaign.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectCampaignQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_campaign.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectCampaignQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectCampaignQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_campaign.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectCasestudyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_casestudy.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_casestudy', toValue(args)] as const
}

export function getRepositorySearchTypeProjectCasestudyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_casestudy.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectCasestudyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_casestudy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectCasestudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_casestudy.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_casestudy.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_casestudy.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_casestudy.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectCasestudyQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_casestudy.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectCasestudyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectCasestudyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_casestudy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectContributionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_contribution.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_contribution', toValue(args)] as const
}

export function getRepositorySearchTypeProjectContributionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_contribution.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectContributionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_contribution.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectContribution<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_contribution.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_contribution.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_contribution.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_contribution.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectContributionQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_contribution.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectContributionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectContributionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_contribution.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectDataformatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_dataformat.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_dataformat', toValue(args)] as const
}

export function getRepositorySearchTypeProjectDataformatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_dataformat.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectDataformatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_dataformat.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectDataformat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_dataformat.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_dataformat.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_dataformat.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_dataformat.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectDataformatQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_dataformat.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectDataformatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectDataformatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_dataformat.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectDatasetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_dataset.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_dataset', toValue(args)] as const
}

export function getRepositorySearchTypeProjectDatasetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_dataset.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectDatasetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_dataset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectDataset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_dataset.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_dataset.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_dataset.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_dataset.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectDatasetQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_dataset.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectDatasetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectDatasetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_dataset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectDeploymentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_deployment.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_deployment', toValue(args)] as const
}

export function getRepositorySearchTypeProjectDeploymentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_deployment.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectDeploymentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_deployment.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectDeployment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_deployment.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_deployment.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_deployment.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_deployment.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectDeploymentQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_deployment.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectDeploymentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectDeploymentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_deployment.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectExperimentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_experiment.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_experiment', toValue(args)] as const
}

export function getRepositorySearchTypeProjectExperimentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_experiment.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectExperimentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_experiment.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectExperiment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_experiment.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_experiment.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_experiment.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_experiment.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectExperimentQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_experiment.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectExperimentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectExperimentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_experiment.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectFieldnoteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_fieldnote.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_fieldnote', toValue(args)] as const
}

export function getRepositorySearchTypeProjectFieldnoteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_fieldnote.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectFieldnoteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_fieldnote.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectFieldnote<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_fieldnote.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_fieldnote.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_fieldnote.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_fieldnote.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectFieldnoteQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_fieldnote.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectFieldnoteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectFieldnoteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_fieldnote.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectGpsControlpointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_gps_controlpoints.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_gps_controlpoints', toValue(args)] as const
}

export function getRepositorySearchTypeProjectGpsControlpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_gps_controlpoints.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectGpsControlpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_gps_controlpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectGpsControlpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_gps_controlpoints.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_gps_controlpoints.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.project_gps_controlpoints.$get>
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
                  ReturnType<typeof client.repository.search.type.project_gps_controlpoints.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectGpsControlpointsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_gps_controlpoints.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectGpsControlpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectGpsControlpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_gps_controlpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectGpsRawQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_gps_raw.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_gps_raw', toValue(args)] as const
}

export function getRepositorySearchTypeProjectGpsRawQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_gps_raw.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectGpsRawQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_gps_raw.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectGpsRaw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_gps_raw.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_gps_raw.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_gps_raw.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_gps_raw.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectGpsRawQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_gps_raw.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectGpsRawQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectGpsRawQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_gps_raw.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectGpsRinexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_gps_rinex.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_gps_rinex', toValue(args)] as const
}

export function getRepositorySearchTypeProjectGpsRinexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_gps_rinex.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectGpsRinexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_gps_rinex.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectGpsRinex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_gps_rinex.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_gps_rinex.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_gps_rinex.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_gps_rinex.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectGpsRinexQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_gps_rinex.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectGpsRinexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectGpsRinexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_gps_rinex.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectInstrumentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_instrument.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_instrument', toValue(args)] as const
}

export function getRepositorySearchTypeProjectInstrumentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_instrument.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectInstrumentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_instrument.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectInstrument<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_instrument.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_instrument.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_instrument.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_instrument.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectInstrumentQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_instrument.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectInstrumentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectInstrumentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_instrument.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectLearningResourceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_learning_resource.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_learning_resource', toValue(args)] as const
}

export function getRepositorySearchTypeProjectLearningResourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_learning_resource.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectLearningResourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_learning_resource.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectLearningResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_learning_resource.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_learning_resource.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.project_learning_resource.$get>
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
                  ReturnType<typeof client.repository.search.type.project_learning_resource.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectLearningResourceQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_learning_resource.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectLearningResourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectLearningResourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_learning_resource.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectMeetingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_meeting.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_meeting', toValue(args)] as const
}

export function getRepositorySearchTypeProjectMeetingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_meeting.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectMeetingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_meeting.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectMeeting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_meeting.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_meeting.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_meeting.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_meeting.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectMeetingQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_meeting.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectMeetingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectMeetingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_meeting.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectOrganizationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_organization.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_organization', toValue(args)] as const
}

export function getRepositorySearchTypeProjectOrganizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_organization.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_organization.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_organization.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_organization.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_organization.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_organization.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectOrganizationQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_organization.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectOrganizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_organization.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectProgramQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_program.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_program', toValue(args)] as const
}

export function getRepositorySearchTypeProjectProgramQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_program.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectProgramQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_program.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectProgram<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_program.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_program.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_program.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_program.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectProgramQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_program.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectProgramQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectProgramQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_program.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectProjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_project.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_project', toValue(args)] as const
}

export function getRepositorySearchTypeProjectProjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_project.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectProjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_project.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectProject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_project.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_project.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_project.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_project.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectProjectQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_project.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectProjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectProjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_project.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectServiceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_service.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_service', toValue(args)] as const
}

export function getRepositorySearchTypeProjectServiceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_service.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectServiceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_service.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectService<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_service.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_service.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_service.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_service.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectServiceQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_service.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectServiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectServiceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_service.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectSiteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.project_site.$get>>,
) {
  return ['repository', '/repository/search/type/project_site', toValue(args)] as const
}

export function getRepositorySearchTypeProjectSiteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.project_site.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectSiteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_site.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectSite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_site.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.project_site.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_site.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_site.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectSiteQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_site.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectSiteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectSiteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_site.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectSoftwarepackageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_softwarepackage.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_softwarepackage', toValue(args)] as const
}

export function getRepositorySearchTypeProjectSoftwarepackageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_softwarepackage.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectSoftwarepackageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_softwarepackage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectSoftwarepackage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_softwarepackage.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_softwarepackage.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.project_softwarepackage.$get>
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
                  ReturnType<typeof client.repository.search.type.project_softwarepackage.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectSoftwarepackageQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_softwarepackage.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectSoftwarepackageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectSoftwarepackageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_softwarepackage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectStandardNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_standard_name.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_standard_name', toValue(args)] as const
}

export function getRepositorySearchTypeProjectStandardNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_standard_name.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectStandardNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_standard_name.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectStandardName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_standard_name.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_standard_name.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_standard_name.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_standard_name.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectStandardNameQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_standard_name.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectStandardNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectStandardNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_standard_name.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectSurveylocationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_surveylocation.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_surveylocation', toValue(args)] as const
}

export function getRepositorySearchTypeProjectSurveylocationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_surveylocation.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectSurveylocationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_surveylocation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectSurveylocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_surveylocation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_surveylocation.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.project_surveylocation.$get>
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
                  ReturnType<typeof client.repository.search.type.project_surveylocation.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectSurveylocationQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_surveylocation.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectSurveylocationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectSurveylocationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_surveylocation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectTermQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.project_term.$get>>,
) {
  return ['repository', '/repository/search/type/project_term', toValue(args)] as const
}

export function getRepositorySearchTypeProjectTermQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.project_term.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectTermQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_term.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_term.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.project_term.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_term.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_term.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectTermQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_term.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectTermQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectTermQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_term.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectVisitQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.project_visit.$get>>,
) {
  return ['repository', '/repository/search/type/project_visit', toValue(args)] as const
}

export function getRepositorySearchTypeProjectVisitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.project_visit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectVisitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_visit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectVisit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_visit.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.project_visit.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_visit.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_visit.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectVisitQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_visit.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectVisitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectVisitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_visit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeProjectVocabularyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_vocabulary.$get>
  >,
) {
  return ['repository', '/repository/search/type/project_vocabulary', toValue(args)] as const
}

export function getRepositorySearchTypeProjectVocabularyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_vocabulary.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeProjectVocabularyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.project_vocabulary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeProjectVocabulary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_vocabulary.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.project_vocabulary.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_vocabulary.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.project_vocabulary.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeProjectVocabularyQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.project_vocabulary.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeProjectVocabularyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeProjectVocabularyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.project_vocabulary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypePropertySalesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.property_sales.$get>
  >,
) {
  return ['repository', '/repository/search/type/property_sales', toValue(args)] as const
}

export function getRepositorySearchTypePropertySalesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.property_sales.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypePropertySalesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.property_sales.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypePropertySales<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.property_sales.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.property_sales.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.property_sales.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.property_sales.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypePropertySalesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.property_sales.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypePropertySalesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypePropertySalesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.property_sales.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypePropertydbQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.propertydb.$get>>,
) {
  return ['repository', '/repository/search/type/propertydb', toValue(args)] as const
}

export function getRepositorySearchTypePropertydbQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.propertydb.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypePropertydbQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.propertydb.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypePropertydb<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.propertydb.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.propertydb.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.propertydb.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.propertydb.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypePropertydbQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.propertydb.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypePropertydbQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypePropertydbQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.propertydb.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypePythonNotebookQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.python_notebook.$get>
  >,
) {
  return ['repository', '/repository/search/type/python_notebook', toValue(args)] as const
}

export function getRepositorySearchTypePythonNotebookQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.python_notebook.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypePythonNotebookQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.python_notebook.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypePythonNotebook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.python_notebook.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.python_notebook.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.python_notebook.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.python_notebook.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypePythonNotebookQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.python_notebook.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypePythonNotebookQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypePythonNotebookQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.python_notebook.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeSlackTeamQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.slack_team.$get>>,
) {
  return ['repository', '/repository/search/type/slack_team', toValue(args)] as const
}

export function getRepositorySearchTypeSlackTeamQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.slack_team.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeSlackTeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.slack_team.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeSlackTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.slack_team.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.slack_team.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.slack_team.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.slack_team.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeSlackTeamQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.slack_team.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeSlackTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeSlackTeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.slack_team.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeStatusboardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.statusboard.$get>>,
) {
  return ['repository', '/repository/search/type/statusboard', toValue(args)] as const
}

export function getRepositorySearchTypeStatusboardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.statusboard.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeStatusboardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.statusboard.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeStatusboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.statusboard.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.statusboard.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.statusboard.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.statusboard.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeStatusboardQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.statusboard.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeStatusboardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeStatusboardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.statusboard.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeSunrisesunsetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.sunrisesunset.$get>>,
) {
  return ['repository', '/repository/search/type/sunrisesunset', toValue(args)] as const
}

export function getRepositorySearchTypeSunrisesunsetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.sunrisesunset.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeSunrisesunsetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.sunrisesunset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeSunrisesunset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.sunrisesunset.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.sunrisesunset.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.sunrisesunset.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.sunrisesunset.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeSunrisesunsetQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.sunrisesunset.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeSunrisesunsetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeSunrisesunsetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.sunrisesunset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.tasks.$get>>,
) {
  return ['repository', '/repository/search/type/tasks', toValue(args)] as const
}

export function getRepositorySearchTypeTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.tasks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.tasks.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.tasks.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTasksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.tasks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTmdbmoviesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.tmdbmovies.$get>>,
) {
  return ['repository', '/repository/search/type/tmdbmovies', toValue(args)] as const
}

export function getRepositorySearchTypeTmdbmoviesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.tmdbmovies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTmdbmoviesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.tmdbmovies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTmdbmovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.tmdbmovies.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.tmdbmovies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.tmdbmovies.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.tmdbmovies.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTmdbmoviesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.tmdbmovies.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTmdbmoviesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTmdbmoviesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.tmdbmovies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTodoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.todo.$get>>,
) {
  return ['repository', '/repository/search/type/todo', toValue(args)] as const
}

export function getRepositorySearchTypeTodoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.todo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTodoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.todo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTodo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.todo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.todo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.todo.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.todo.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTodoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.todo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTodoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTodoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.todo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTripEventQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_event.$get>>,
) {
  return ['repository', '/repository/search/type/trip_event', toValue(args)] as const
}

export function getRepositorySearchTypeTripEventQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_event.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTripEventQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.trip_event.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTripEvent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.trip_event.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_event.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.trip_event.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.trip_event.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTripEventQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.trip_event.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTripEventQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTripEventQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.trip_event.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTripFlightQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_flight.$get>>,
) {
  return ['repository', '/repository/search/type/trip_flight', toValue(args)] as const
}

export function getRepositorySearchTypeTripFlightQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_flight.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTripFlightQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.trip_flight.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTripFlight<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.trip_flight.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_flight.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.trip_flight.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.trip_flight.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTripFlightQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.trip_flight.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTripFlightQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTripFlightQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.trip_flight.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTripHotelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_hotel.$get>>,
) {
  return ['repository', '/repository/search/type/trip_hotel', toValue(args)] as const
}

export function getRepositorySearchTypeTripHotelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_hotel.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTripHotelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.trip_hotel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTripHotel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.trip_hotel.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_hotel.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.trip_hotel.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.trip_hotel.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTripHotelQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.trip_hotel.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTripHotelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTripHotelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.trip_hotel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTripReportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_report.$get>>,
) {
  return ['repository', '/repository/search/type/trip_report', toValue(args)] as const
}

export function getRepositorySearchTypeTripReportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_report.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTripReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.trip_report.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTripReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.trip_report.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_report.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.trip_report.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.trip_report.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTripReportQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.trip_report.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTripReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTripReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.trip_report.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTripTripQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_trip.$get>>,
) {
  return ['repository', '/repository/search/type/trip_trip', toValue(args)] as const
}

export function getRepositorySearchTypeTripTripQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_trip.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTripTripQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.trip_trip.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTripTrip<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.trip_trip.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.trip_trip.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.trip_trip.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.trip_trip.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTripTripQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.trip_trip.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTripTripQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTripTripQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.trip_trip.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeAwcMetarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_awc_metar.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_awc_metar', toValue(args)] as const
}

export function getRepositorySearchTypeTypeAwcMetarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_awc_metar.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeAwcMetarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_awc_metar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeAwcMetar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_awc_metar.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_awc_metar.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_awc_metar.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_awc_metar.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeAwcMetarQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_awc_metar.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeAwcMetarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeAwcMetarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_awc_metar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeBizStockseriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_biz_stockseries.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_biz_stockseries', toValue(args)] as const
}

export function getRepositorySearchTypeTypeBizStockseriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_biz_stockseries.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeBizStockseriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_biz_stockseries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeBizStockseries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_biz_stockseries.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_biz_stockseries.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_biz_stockseries.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_biz_stockseries.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeBizStockseriesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_biz_stockseries.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeBizStockseriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeBizStockseriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_biz_stockseries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeBlsSeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_bls_series.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_bls_series', toValue(args)] as const
}

export function getRepositorySearchTypeTypeBlsSeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_bls_series.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeBlsSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_bls_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeBlsSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_bls_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_bls_series.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_bls_series.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_bls_series.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeBlsSeriesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_bls_series.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeBlsSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeBlsSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_bls_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeBlsSurveyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_bls_survey.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_bls_survey', toValue(args)] as const
}

export function getRepositorySearchTypeTypeBlsSurveyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_bls_survey.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeBlsSurveyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_bls_survey.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeBlsSurvey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_bls_survey.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_bls_survey.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_bls_survey.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_bls_survey.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeBlsSurveyQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_bls_survey.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeBlsSurveyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeBlsSurveyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_bls_survey.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeCensusAcsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_census_acs.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_census_acs', toValue(args)] as const
}

export function getRepositorySearchTypeTypeCensusAcsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_census_acs.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeCensusAcsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_census_acs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeCensusAcs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_census_acs.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_census_acs.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_census_acs.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_census_acs.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeCensusAcsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_census_acs.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeCensusAcsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeCensusAcsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_census_acs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeDaymetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_daymet.$get>>,
) {
  return ['repository', '/repository/search/type/type_daymet', toValue(args)] as const
}

export function getRepositorySearchTypeTypeDaymetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_daymet.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeDaymetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_daymet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeDaymet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_daymet.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_daymet.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_daymet.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_daymet.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeDaymetQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_daymet.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeDaymetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeDaymetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_daymet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeDbTableQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_db_table.$get>>,
) {
  return ['repository', '/repository/search/type/type_db_table', toValue(args)] as const
}

export function getRepositorySearchTypeTypeDbTableQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_db_table.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeDbTableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_db_table.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeDbTable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_db_table.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_db_table.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_db_table.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_db_table.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeDbTableQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_db_table.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeDbTableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeDbTableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_db_table.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeDocumentCsvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_csv.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_document_csv', toValue(args)] as const
}

export function getRepositorySearchTypeTypeDocumentCsvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_csv.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeDocumentCsvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_document_csv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeDocumentCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_csv.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_csv.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_document_csv.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_document_csv.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeDocumentCsvQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_document_csv.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeDocumentCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeDocumentCsvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_document_csv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeDocumentDocQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_doc.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_document_doc', toValue(args)] as const
}

export function getRepositorySearchTypeTypeDocumentDocQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_doc.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeDocumentDocQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_document_doc.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeDocumentDoc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_doc.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_doc.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_document_doc.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_document_doc.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeDocumentDocQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_document_doc.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeDocumentDocQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeDocumentDocQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_document_doc.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeDocumentHtmlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_html.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_document_html', toValue(args)] as const
}

export function getRepositorySearchTypeTypeDocumentHtmlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_html.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeDocumentHtmlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_document_html.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeDocumentHtml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_html.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_html.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_document_html.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_document_html.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeDocumentHtmlQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_document_html.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeDocumentHtmlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeDocumentHtmlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_document_html.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeDocumentPdfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_pdf.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_document_pdf', toValue(args)] as const
}

export function getRepositorySearchTypeTypeDocumentPdfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_pdf.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeDocumentPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_document_pdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeDocumentPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_pdf.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_pdf.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_document_pdf.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_document_pdf.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeDocumentPdfQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_document_pdf.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeDocumentPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeDocumentPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_document_pdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeDocumentPptQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_ppt.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_document_ppt', toValue(args)] as const
}

export function getRepositorySearchTypeTypeDocumentPptQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_ppt.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeDocumentPptQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_document_ppt.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeDocumentPpt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_ppt.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_ppt.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_document_ppt.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_document_ppt.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeDocumentPptQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_document_ppt.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeDocumentPptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeDocumentPptQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_document_ppt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeDocumentXlsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_xls.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_document_xls', toValue(args)] as const
}

export function getRepositorySearchTypeTypeDocumentXlsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_xls.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeDocumentXlsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_document_xls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeDocumentXls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_xls.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_document_xls.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_document_xls.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_document_xls.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeDocumentXlsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_document_xls.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeDocumentXlsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeDocumentXlsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_document_xls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeDrilsdownCasestudyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_drilsdown_casestudy', toValue(args)] as const
}

export function getRepositorySearchTypeTypeDrilsdownCasestudyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeDrilsdownCasestudyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_drilsdown_casestudy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeDrilsdownCasestudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>
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
                  ReturnType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeDrilsdownCasestudyQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeDrilsdownCasestudyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeDrilsdownCasestudyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_drilsdown_casestudy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeEdgarFilingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_edgar_filing.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_edgar_filing', toValue(args)] as const
}

export function getRepositorySearchTypeTypeEdgarFilingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_edgar_filing.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeEdgarFilingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_edgar_filing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeEdgarFiling<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_edgar_filing.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_edgar_filing.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_edgar_filing.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_edgar_filing.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeEdgarFilingQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_edgar_filing.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeEdgarFilingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeEdgarFilingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_edgar_filing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeEiaCategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_eia_category.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_eia_category', toValue(args)] as const
}

export function getRepositorySearchTypeTypeEiaCategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_eia_category.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeEiaCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_eia_category.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeEiaCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_eia_category.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_eia_category.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_eia_category.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_eia_category.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeEiaCategoryQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_eia_category.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeEiaCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeEiaCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_eia_category.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeEiaSeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_eia_series.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_eia_series', toValue(args)] as const
}

export function getRepositorySearchTypeTypeEiaSeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_eia_series.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeEiaSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_eia_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeEiaSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_eia_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_eia_series.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_eia_series.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_eia_series.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeEiaSeriesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_eia_series.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeEiaSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeEiaSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_eia_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeEsriFeatureserverQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_featureserver.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_esri_featureserver', toValue(args)] as const
}

export function getRepositorySearchTypeTypeEsriFeatureserverQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_featureserver.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeEsriFeatureserverQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_esri_featureserver.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeEsriFeatureserver<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_featureserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_featureserver.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_esri_featureserver.$get>
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
                  ReturnType<typeof client.repository.search.type.type_esri_featureserver.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeEsriFeatureserverQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_esri_featureserver.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeEsriFeatureserverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeEsriFeatureserverQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_esri_featureserver.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeEsriGeometryserverQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_geometryserver.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_esri_geometryserver', toValue(args)] as const
}

export function getRepositorySearchTypeTypeEsriGeometryserverQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_geometryserver.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeEsriGeometryserverQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_esri_geometryserver.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeEsriGeometryserver<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_geometryserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_geometryserver.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_esri_geometryserver.$get>
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
                  ReturnType<typeof client.repository.search.type.type_esri_geometryserver.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeEsriGeometryserverQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_esri_geometryserver.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeEsriGeometryserverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeEsriGeometryserverQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_esri_geometryserver.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeEsriGpserverQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_gpserver.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_esri_gpserver', toValue(args)] as const
}

export function getRepositorySearchTypeTypeEsriGpserverQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_gpserver.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeEsriGpserverQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_esri_gpserver.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeEsriGpserver<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_gpserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_gpserver.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_esri_gpserver.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_esri_gpserver.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeEsriGpserverQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_esri_gpserver.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeEsriGpserverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeEsriGpserverQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_esri_gpserver.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeEsriImageserverQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_imageserver.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_esri_imageserver', toValue(args)] as const
}

export function getRepositorySearchTypeTypeEsriImageserverQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_imageserver.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeEsriImageserverQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_esri_imageserver.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeEsriImageserver<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_imageserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_imageserver.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_esri_imageserver.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_esri_imageserver.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeEsriImageserverQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_esri_imageserver.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeEsriImageserverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeEsriImageserverQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_esri_imageserver.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeEsriLayerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_layer.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_esri_layer', toValue(args)] as const
}

export function getRepositorySearchTypeTypeEsriLayerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_layer.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeEsriLayerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_esri_layer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeEsriLayer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_layer.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_layer.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_esri_layer.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_esri_layer.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeEsriLayerQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_esri_layer.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeEsriLayerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeEsriLayerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_esri_layer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeEsriMapserverQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_mapserver.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_esri_mapserver', toValue(args)] as const
}

export function getRepositorySearchTypeTypeEsriMapserverQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_mapserver.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeEsriMapserverQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_esri_mapserver.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeEsriMapserver<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_mapserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_mapserver.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_esri_mapserver.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_esri_mapserver.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeEsriMapserverQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_esri_mapserver.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeEsriMapserverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeEsriMapserverQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_esri_mapserver.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeEsriRestfolderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_restfolder.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_esri_restfolder', toValue(args)] as const
}

export function getRepositorySearchTypeTypeEsriRestfolderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_restfolder.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeEsriRestfolderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_esri_restfolder.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeEsriRestfolder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_restfolder.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_restfolder.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_esri_restfolder.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_esri_restfolder.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeEsriRestfolderQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_esri_restfolder.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeEsriRestfolderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeEsriRestfolderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_esri_restfolder.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeEsriRestserverQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_restserver.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_esri_restserver', toValue(args)] as const
}

export function getRepositorySearchTypeTypeEsriRestserverQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_restserver.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeEsriRestserverQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_esri_restserver.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeEsriRestserver<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_restserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_restserver.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_esri_restserver.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_esri_restserver.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeEsriRestserverQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_esri_restserver.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeEsriRestserverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeEsriRestserverQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_esri_restserver.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeEsriRestserviceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_restservice.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_esri_restservice', toValue(args)] as const
}

export function getRepositorySearchTypeTypeEsriRestserviceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_restservice.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeEsriRestserviceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_esri_restservice.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeEsriRestservice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_restservice.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_esri_restservice.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_esri_restservice.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_esri_restservice.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeEsriRestserviceQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_esri_restservice.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeEsriRestserviceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeEsriRestserviceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_esri_restservice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeExtremesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_extremes.$get>>,
) {
  return ['repository', '/repository/search/type/type_extremes', toValue(args)] as const
}

export function getRepositorySearchTypeTypeExtremesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_extremes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeExtremesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_extremes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeExtremes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_extremes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_extremes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_extremes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_extremes.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeExtremesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_extremes.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeExtremesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeExtremesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_extremes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeFredCategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_fred_category.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_fred_category', toValue(args)] as const
}

export function getRepositorySearchTypeTypeFredCategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_fred_category.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeFredCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_fred_category.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeFredCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_fred_category.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_fred_category.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_fred_category.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_fred_category.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeFredCategoryQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_fred_category.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeFredCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeFredCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_fred_category.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeFredSeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_fred_series.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_fred_series', toValue(args)] as const
}

export function getRepositorySearchTypeTypeFredSeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_fred_series.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeFredSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_fred_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeFredSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_fred_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_fred_series.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_fred_series.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_fred_series.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeFredSeriesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_fred_series.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeFredSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeFredSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_fred_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeGtfsAgencyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_agency.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_gtfs_agency', toValue(args)] as const
}

export function getRepositorySearchTypeTypeGtfsAgencyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_agency.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeGtfsAgencyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_gtfs_agency.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeGtfsAgency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_agency.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_agency.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_agency.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_agency.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeGtfsAgencyQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_agency.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeGtfsAgencyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeGtfsAgencyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_gtfs_agency.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeGtfsRouteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_route.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_gtfs_route', toValue(args)] as const
}

export function getRepositorySearchTypeTypeGtfsRouteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_route.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeGtfsRouteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_gtfs_route.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeGtfsRoute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_route.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_route.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_route.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_route.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeGtfsRouteQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_route.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeGtfsRouteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeGtfsRouteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_gtfs_route.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeGtfsRoutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_routes.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_gtfs_routes', toValue(args)] as const
}

export function getRepositorySearchTypeTypeGtfsRoutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_routes.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeGtfsRoutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_gtfs_routes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeGtfsRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_routes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_routes.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_routes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_routes.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeGtfsRoutesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_routes.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeGtfsRoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeGtfsRoutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_gtfs_routes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeGtfsStopQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_stop.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_gtfs_stop', toValue(args)] as const
}

export function getRepositorySearchTypeTypeGtfsStopQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_stop.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeGtfsStopQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_gtfs_stop.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeGtfsStop<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stop.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_stop.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stop.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stop.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeGtfsStopQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stop.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeGtfsStopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeGtfsStopQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_gtfs_stop.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeGtfsStopsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_stops.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_gtfs_stops', toValue(args)] as const
}

export function getRepositorySearchTypeTypeGtfsStopsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_stops.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeGtfsStopsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_gtfs_stops.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeGtfsStops<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stops.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_stops.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stops.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stops.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeGtfsStopsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stops.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeGtfsStopsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeGtfsStopsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_gtfs_stops.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeGtfsTripQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_trip.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_gtfs_trip', toValue(args)] as const
}

export function getRepositorySearchTypeTypeGtfsTripQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_trip.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeGtfsTripQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_gtfs_trip.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeGtfsTrip<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_trip.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_gtfs_trip.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_trip.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_trip.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeGtfsTripQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_trip.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeGtfsTripQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeGtfsTripQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_gtfs_trip.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeHazarddataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_hazarddata.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_hazarddata', toValue(args)] as const
}

export function getRepositorySearchTypeTypeHazarddataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_hazarddata.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeHazarddataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_hazarddata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeHazarddata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_hazarddata.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_hazarddata.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_hazarddata.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_hazarddata.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeHazarddataQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_hazarddata.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeHazarddataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeHazarddataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_hazarddata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeHydroColoradoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_hydro_colorado.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_hydro_colorado', toValue(args)] as const
}

export function getRepositorySearchTypeTypeHydroColoradoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_hydro_colorado.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeHydroColoradoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_hydro_colorado.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeHydroColorado<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_hydro_colorado.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_hydro_colorado.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_hydro_colorado.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_hydro_colorado.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeHydroColoradoQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_hydro_colorado.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeHydroColoradoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeHydroColoradoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_hydro_colorado.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeIdvBundleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_idv_bundle.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_idv_bundle', toValue(args)] as const
}

export function getRepositorySearchTypeTypeIdvBundleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_idv_bundle.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeIdvBundleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_idv_bundle.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeIdvBundle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_idv_bundle.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_idv_bundle.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_idv_bundle.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_idv_bundle.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeIdvBundleQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_idv_bundle.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeIdvBundleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeIdvBundleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_idv_bundle.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeImageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_image.$get>>,
) {
  return ['repository', '/repository/search/type/type_image', toValue(args)] as const
}

export function getRepositorySearchTypeTypeImageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_image.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeImageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_image.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_image.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_image.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_image.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_image.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeImageQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_image.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeImageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeImageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_image.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeImageAirportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_image_airport.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_image_airport', toValue(args)] as const
}

export function getRepositorySearchTypeTypeImageAirportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_image_airport.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeImageAirportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_image_airport.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeImageAirport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_image_airport.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_image_airport.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_image_airport.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_image_airport.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeImageAirportQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_image_airport.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeImageAirportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeImageAirportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_image_airport.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeImageWebcamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_image_webcam.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_image_webcam', toValue(args)] as const
}

export function getRepositorySearchTypeTypeImageWebcamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_image_webcam.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeImageWebcamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_image_webcam.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeImageWebcam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_image_webcam.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_image_webcam.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_image_webcam.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_image_webcam.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeImageWebcamQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_image_webcam.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeImageWebcamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeImageWebcamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_image_webcam.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeMbQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_mb.$get>>,
) {
  return ['repository', '/repository/search/type/type_mb', toValue(args)] as const
}

export function getRepositorySearchTypeTypeMbQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_mb.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeMbQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_mb.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeMb<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.type_mb.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_mb.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_mb.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_mb.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeMbQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.type_mb.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeMbQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeMbQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_mb.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeMbCollectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_mb_collection.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_mb_collection', toValue(args)] as const
}

export function getRepositorySearchTypeTypeMbCollectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_mb_collection.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeMbCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_mb_collection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeMbCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_mb_collection.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_mb_collection.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_mb_collection.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_mb_collection.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeMbCollectionQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_mb_collection.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeMbCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeMbCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_mb_collection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeMbPointBasicQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_mb_point_basic.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_mb_point_basic', toValue(args)] as const
}

export function getRepositorySearchTypeTypeMbPointBasicQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_mb_point_basic.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeMbPointBasicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_mb_point_basic.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeMbPointBasic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_mb_point_basic.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_mb_point_basic.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_mb_point_basic.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_mb_point_basic.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeMbPointBasicQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_mb_point_basic.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeMbPointBasicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeMbPointBasicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_mb_point_basic.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeMetametaDictionaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_metameta_dictionary.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_metameta_dictionary', toValue(args)] as const
}

export function getRepositorySearchTypeTypeMetametaDictionaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_metameta_dictionary.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeMetametaDictionaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_metameta_dictionary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeMetametaDictionary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_metameta_dictionary.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_metameta_dictionary.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_metameta_dictionary.$get>
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
                  ReturnType<typeof client.repository.search.type.type_metameta_dictionary.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeMetametaDictionaryQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_metameta_dictionary.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeMetametaDictionaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeMetametaDictionaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_metameta_dictionary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeMetametaFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_metameta_field.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_metameta_field', toValue(args)] as const
}

export function getRepositorySearchTypeTypeMetametaFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_metameta_field.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeMetametaFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_metameta_field.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeMetametaField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_metameta_field.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_metameta_field.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_metameta_field.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_metameta_field.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeMetametaFieldQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_metameta_field.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeMetametaFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeMetametaFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_metameta_field.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeNasaamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_nasaames.$get>>,
) {
  return ['repository', '/repository/search/type/type_nasaames', toValue(args)] as const
}

export function getRepositorySearchTypeTypeNasaamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_nasaames.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeNasaamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_nasaames.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeNasaames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_nasaames.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_nasaames.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_nasaames.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_nasaames.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeNasaamesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_nasaames.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeNasaamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeNasaamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_nasaames.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeNcssQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_ncss.$get>>,
) {
  return ['repository', '/repository/search/type/type_ncss', toValue(args)] as const
}

export function getRepositorySearchTypeTypeNcssQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_ncss.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeNcssQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_ncss.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeNcss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.type_ncss.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_ncss.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_ncss.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_ncss.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeNcssQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_ncss.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeNcssQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeNcssQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_ncss.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeNitfQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_nitf.$get>>,
) {
  return ['repository', '/repository/search/type/type_nitf', toValue(args)] as const
}

export function getRepositorySearchTypeTypeNitfQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_nitf.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeNitfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_nitf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeNitf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.type_nitf.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_nitf.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_nitf.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_nitf.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeNitfQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_nitf.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeNitfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeNitfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_nitf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointAmerifluxLevel2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_ameriflux_level2',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointAmerifluxLevel2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointAmerifluxLevel2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_ameriflux_level2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointAmerifluxLevel2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>
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
                  ReturnType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointAmerifluxLevel2QueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointAmerifluxLevel2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointAmerifluxLevel2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_ameriflux_level2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointAmrcFinalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_amrc_final.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_amrc_final', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointAmrcFinalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_amrc_final.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointAmrcFinalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_amrc_final.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointAmrcFinal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_final.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_amrc_final.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_final.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_final.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointAmrcFinalQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_final.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointAmrcFinalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointAmrcFinalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_amrc_final.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointAmrcFreewaveQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_amrc_freewave.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_amrc_freewave', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointAmrcFreewaveQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_amrc_freewave.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointAmrcFreewaveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_amrc_freewave.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointAmrcFreewave<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_freewave.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_amrc_freewave.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_point_amrc_freewave.$get>
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
                  ReturnType<typeof client.repository.search.type.type_point_amrc_freewave.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointAmrcFreewaveQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_freewave.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointAmrcFreewaveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointAmrcFreewaveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_amrc_freewave.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointCzoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_czo.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_czo', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointCzoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_czo.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointCzoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_czo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointCzo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_czo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_czo.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_czo.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_czo.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointCzoQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_czo.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointCzoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointCzoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_czo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointGcnetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_gcnet.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_gcnet', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointGcnetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_gcnet.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointGcnetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_gcnet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointGcnet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_gcnet.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_gcnet.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_gcnet.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_gcnet.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointGcnetQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_gcnet.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointGcnetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointGcnetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_gcnet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointGeomagIaga2002QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_geomag_iaga2002',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointGeomagIaga2002QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointGeomagIaga2002QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_geomag_iaga2002.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointGeomagIaga2002<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>
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
                  ReturnType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointGeomagIaga2002QueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointGeomagIaga2002QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointGeomagIaga2002QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_geomag_iaga2002.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointHydroWatermlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_hydro_waterml.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_hydro_waterml', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointHydroWatermlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_hydro_waterml.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointHydroWatermlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_hydro_waterml.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointHydroWaterml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_hydro_waterml.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_hydro_waterml.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_point_hydro_waterml.$get>
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
                  ReturnType<typeof client.repository.search.type.type_point_hydro_waterml.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointHydroWatermlQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_hydro_waterml.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointHydroWatermlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointHydroWatermlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_hydro_waterml.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointIcebridgeAtmIcessnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_icebridge_atm_icessn',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointIcebridgeAtmIcessnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointIcebridgeAtmIcessnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_icebridge_atm_icessn.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointIcebridgeAtmIcessn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>
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
                    typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get
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
                    typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointIcebridgeAtmIcessnQueryKey>
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
            ReturnType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointIcebridgeAtmIcessnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointIcebridgeAtmIcessnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_icebridge_atm_icessn.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointIcebridgeAtmQfitQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_icebridge_atm_qfit',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointIcebridgeAtmQfitQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointIcebridgeAtmQfitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_icebridge_atm_qfit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointIcebridgeAtmQfit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>
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
                    typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get
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
                    typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointIcebridgeAtmQfitQueryKey>
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
            ReturnType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointIcebridgeAtmQfitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointIcebridgeAtmQfitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_icebridge_atm_qfit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_icebridge_mccords_irmcr2',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get>
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
                    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get
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
                    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2QueryKey>
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
              typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2QueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_icebridge_mccords_irmcr3',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get>
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
                    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get
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
                    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3QueryKey>
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
              typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3QueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointIcebridgeParisQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_paris.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_icebridge_paris',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointIcebridgeParisQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_paris.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointIcebridgeParisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_icebridge_paris.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointIcebridgeParis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_icebridge_paris.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_icebridge_paris.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_point_icebridge_paris.$get>
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
                  ReturnType<typeof client.repository.search.type.type_point_icebridge_paris.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointIcebridgeParisQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_icebridge_paris.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointIcebridgeParisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointIcebridgeParisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_icebridge_paris.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointIdvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_idv.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_idv', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointIdvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_idv.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointIdvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_idv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointIdv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_idv.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_idv.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_idv.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_idv.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointIdvQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_idv.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointIdvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointIdvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_idv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointInlineQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_inline.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_inline', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointInlineQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_inline.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointInlineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_inline.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointInline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_inline.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_inline.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_inline.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_inline.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointInlineQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_inline.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointInlineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointInlineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_inline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointNcdcClimateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ncdc_climate.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_ncdc_climate', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointNcdcClimateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ncdc_climate.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointNcdcClimateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_ncdc_climate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointNcdcClimate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ncdc_climate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ncdc_climate.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_point_ncdc_climate.$get>
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
                  ReturnType<typeof client.repository.search.type.type_point_ncdc_climate.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointNcdcClimateQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_ncdc_climate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointNcdcClimateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointNcdcClimateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_ncdc_climate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointNetcdfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_netcdf.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_netcdf', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointNetcdfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_netcdf.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointNetcdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_netcdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointNetcdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_netcdf.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_netcdf.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_netcdf.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_netcdf.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointNetcdfQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_netcdf.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointNetcdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointNetcdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_netcdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointNoaaCarbonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_carbon.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_noaa_carbon', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointNoaaCarbonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_carbon.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointNoaaCarbonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_noaa_carbon.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointNoaaCarbon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_carbon.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_carbon.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_point_noaa_carbon.$get>
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
                  ReturnType<typeof client.repository.search.type.type_point_noaa_carbon.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointNoaaCarbonQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_carbon.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointNoaaCarbonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointNoaaCarbonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_noaa_carbon.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointNoaaFlaskEventQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_noaa_flask_event',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointNoaaFlaskEventQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointNoaaFlaskEventQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_noaa_flask_event.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointNoaaFlaskEvent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>
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
                  ReturnType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointNoaaFlaskEventQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointNoaaFlaskEventQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointNoaaFlaskEventQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_noaa_flask_event.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointNoaaFlaskMonthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_noaa_flask_month',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointNoaaFlaskMonthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointNoaaFlaskMonthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_noaa_flask_month.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointNoaaFlaskMonth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>
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
                  ReturnType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointNoaaFlaskMonthQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointNoaaFlaskMonthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointNoaaFlaskMonthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_noaa_flask_month.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointNoaaMadisQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_madis.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_noaa_madis', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointNoaaMadisQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_madis.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointNoaaMadisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_noaa_madis.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointNoaaMadis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_madis.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_madis.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_madis.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_madis.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointNoaaMadisQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_madis.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointNoaaMadisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointNoaaMadisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_noaa_madis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointNoaaTowerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_tower.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_noaa_tower', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointNoaaTowerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_tower.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointNoaaTowerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_noaa_tower.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointNoaaTower<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_tower.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_noaa_tower.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_tower.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_tower.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointNoaaTowerQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_tower.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointNoaaTowerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointNoaaTowerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_noaa_tower.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointOceanCnvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_cnv.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_ocean_cnv', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointOceanCnvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_cnv.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointOceanCnvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_ocean_cnv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointOceanCnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_cnv.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_cnv.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_cnv.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_cnv.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointOceanCnvQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_cnv.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointOceanCnvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointOceanCnvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_ocean_cnv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointOceanCsvSadoTTSQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_ocean_csv_sado_TTS',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointOceanCsvSadoTTSQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointOceanCsvSadoTTSQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_ocean_csv_sado_TTS.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointOceanCsvSadoTTS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>
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
                    typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get
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
                    typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointOceanCsvSadoTTSQueryKey>
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
            ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointOceanCsvSadoTTSQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointOceanCsvSadoTTSQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_ocean_csv_sado_TTS.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointOceanCsvSadoMeteoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_ocean_csv_sado_meteo',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointOceanCsvSadoMeteoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointOceanCsvSadoMeteoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_ocean_csv_sado_meteo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointOceanCsvSadoMeteo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>
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
                    typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get
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
                    typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointOceanCsvSadoMeteoQueryKey>
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
            ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointOceanCsvSadoMeteoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointOceanCsvSadoMeteoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_ocean_csv_sado_meteo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointOceanCsvSadoPositionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_ocean_csv_sado_position',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointOceanCsvSadoPositionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointOceanCsvSadoPositionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_ocean_csv_sado_position.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointOceanCsvSadoPosition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get>
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
                    typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get
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
                    typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointOceanCsvSadoPositionQueryKey>
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
            ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointOceanCsvSadoPositionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointOceanCsvSadoPositionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_ocean_csv_sado_position.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointOceanNetcdfGliderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_ocean_netcdf_glider',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointOceanNetcdfGliderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointOceanNetcdfGliderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_ocean_netcdf_glider.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointOceanNetcdfGlider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>
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
                    typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get
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
                    typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointOceanNetcdfGliderQueryKey>
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
            ReturnType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointOceanNetcdfGliderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointOceanNetcdfGliderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_ocean_netcdf_glider.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointOceanNetcdfTrackQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_ocean_netcdf_track',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointOceanNetcdfTrackQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointOceanNetcdfTrackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_ocean_netcdf_track.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointOceanNetcdfTrack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>
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
                    typeof client.repository.search.type.type_point_ocean_netcdf_track.$get
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
                    typeof client.repository.search.type.type_point_ocean_netcdf_track.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointOceanNetcdfTrackQueryKey>
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
            ReturnType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointOceanNetcdfTrackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointOceanNetcdfTrackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_ocean_netcdf_track.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointOceanOoiDmgxQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_ocean_ooi_dmgx', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointOceanOoiDmgxQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointOceanOoiDmgxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_ocean_ooi_dmgx.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointOceanOoiDmgx<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>
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
                  ReturnType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointOceanOoiDmgxQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointOceanOoiDmgxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointOceanOoiDmgxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_ocean_ooi_dmgx.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointOpenaqQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_openaq.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_openaq', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointOpenaqQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_openaq.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointOpenaqQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_openaq.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointOpenaq<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_openaq.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_openaq.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_openaq.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_openaq.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointOpenaqQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_openaq.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointOpenaqQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointOpenaqQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_openaq.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointPboPositionTimeSeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_pbo_position_time_series.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_pbo_position_time_series',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePointPboPositionTimeSeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_pbo_position_time_series.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointPboPositionTimeSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_pbo_position_time_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointPboPositionTimeSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.repository.search.type.type_point_pbo_position_time_series.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_pbo_position_time_series.$get>
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
                    typeof client.repository.search.type.type_point_pbo_position_time_series.$get
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
                    typeof client.repository.search.type.type_point_pbo_position_time_series.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointPboPositionTimeSeriesQueryKey>
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
              typeof client.repository.search.type.type_point_pbo_position_time_series.$get
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointPboPositionTimeSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointPboPositionTimeSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_pbo_position_time_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointSimpleRecordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_simple_records.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_simple_records', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointSimpleRecordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_simple_records.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointSimpleRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_simple_records.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointSimpleRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_simple_records.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_simple_records.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.repository.search.type.type_point_simple_records.$get>
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
                  ReturnType<typeof client.repository.search.type.type_point_simple_records.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointSimpleRecordsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_simple_records.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointSimpleRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointSimpleRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_simple_records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointSnotelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_snotel.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_snotel', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointSnotelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_snotel.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointSnotelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_snotel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointSnotel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_snotel.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_snotel.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_snotel.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_snotel.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointSnotelQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_snotel.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointSnotelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointSnotelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_snotel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointTextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_text.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_text', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointTextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_text.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointTextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_text.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_text.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_text.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_text.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_text.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointTextQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_text.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointTextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointTextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_text.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePointWsbbGgpQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_point_wsbb_ggp', toValue(args)] as const
}

export function getRepositorySearchTypeTypePointWsbbGgpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePointWsbbGgpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_point_wsbb_ggp.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePointWsbbGgp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePointWsbbGgpQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePointWsbbGgpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePointWsbbGgpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_point_wsbb_ggp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypePsdMonthlyClimateIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_psd_monthly_climate_index',
    toValue(args),
  ] as const
}

export function getRepositorySearchTypeTypePsdMonthlyClimateIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypePsdMonthlyClimateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_psd_monthly_climate_index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypePsdMonthlyClimateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>
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
                    typeof client.repository.search.type.type_psd_monthly_climate_index.$get
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
                    typeof client.repository.search.type.type_psd_monthly_climate_index.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypePsdMonthlyClimateIndexQueryKey>
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
            ReturnType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypePsdMonthlyClimateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypePsdMonthlyClimateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_psd_monthly_climate_index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeQuandlSeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_quandl_series.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_quandl_series', toValue(args)] as const
}

export function getRepositorySearchTypeTypeQuandlSeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_quandl_series.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeQuandlSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_quandl_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeQuandlSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_quandl_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_quandl_series.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_quandl_series.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_quandl_series.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeQuandlSeriesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_quandl_series.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeQuandlSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeQuandlSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_quandl_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeServiceGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_service_group.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_service_group', toValue(args)] as const
}

export function getRepositorySearchTypeTypeServiceGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_service_group.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeServiceGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_service_group.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeServiceGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_service_group.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_service_group.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_service_group.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_service_group.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeServiceGroupQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_service_group.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeServiceGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeServiceGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_service_group.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeServiceLinkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_service_link.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_service_link', toValue(args)] as const
}

export function getRepositorySearchTypeTypeServiceLinkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_service_link.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeServiceLinkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_service_link.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeServiceLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_service_link.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_service_link.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_service_link.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_service_link.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeServiceLinkQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_service_link.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeServiceLinkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeServiceLinkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_service_link.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeSocrataSeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_socrata_series.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_socrata_series', toValue(args)] as const
}

export function getRepositorySearchTypeTypeSocrataSeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_socrata_series.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeSocrataSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_socrata_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeSocrataSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_socrata_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_socrata_series.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_socrata_series.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_socrata_series.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeSocrataSeriesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_socrata_series.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeSocrataSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeSocrataSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_socrata_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeSoundingCodQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_sounding_cod.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_sounding_cod', toValue(args)] as const
}

export function getRepositorySearchTypeTypeSoundingCodQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_sounding_cod.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeSoundingCodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_sounding_cod.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeSoundingCod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_sounding_cod.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_sounding_cod.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_sounding_cod.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_sounding_cod.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeSoundingCodQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_sounding_cod.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeSoundingCodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeSoundingCodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_sounding_cod.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeSoundingFrdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_sounding_frd.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_sounding_frd', toValue(args)] as const
}

export function getRepositorySearchTypeTypeSoundingFrdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_sounding_frd.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeSoundingFrdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_sounding_frd.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeSoundingFrd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_sounding_frd.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_sounding_frd.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_sounding_frd.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_sounding_frd.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeSoundingFrdQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_sounding_frd.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeSoundingFrdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeSoundingFrdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_sounding_frd.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeSoundingGsdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_sounding_gsd.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_sounding_gsd', toValue(args)] as const
}

export function getRepositorySearchTypeTypeSoundingGsdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_sounding_gsd.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeSoundingGsdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_sounding_gsd.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeSoundingGsd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_sounding_gsd.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_sounding_gsd.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_sounding_gsd.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_sounding_gsd.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeSoundingGsdQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_sounding_gsd.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeSoundingGsdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeSoundingGsdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_sounding_gsd.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeSoundingWyomingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_sounding_wyoming.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_sounding_wyoming', toValue(args)] as const
}

export function getRepositorySearchTypeTypeSoundingWyomingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_sounding_wyoming.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeSoundingWyomingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_sounding_wyoming.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeSoundingWyoming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_sounding_wyoming.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_sounding_wyoming.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_sounding_wyoming.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_sounding_wyoming.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeSoundingWyomingQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_sounding_wyoming.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeSoundingWyomingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeSoundingWyomingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_sounding_wyoming.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeTmyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_tmy.$get>>,
) {
  return ['repository', '/repository/search/type/type_tmy', toValue(args)] as const
}

export function getRepositorySearchTypeTypeTmyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_tmy.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeTmyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_tmy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeTmy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.type_tmy.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_tmy.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_tmy.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_tmy.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeTmyQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_tmy.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeTmyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeTmyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_tmy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeTweetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_tweet.$get>>,
) {
  return ['repository', '/repository/search/type/type_tweet', toValue(args)] as const
}

export function getRepositorySearchTypeTypeTweetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_tweet.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeTweetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_tweet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeTweet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_tweet.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_tweet.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_tweet.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_tweet.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeTweetQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_tweet.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeTweetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeTweetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_tweet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeUsgsGaugeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_usgs_gauge.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_usgs_gauge', toValue(args)] as const
}

export function getRepositorySearchTypeTypeUsgsGaugeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_usgs_gauge.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeUsgsGaugeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_usgs_gauge.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeUsgsGauge<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_usgs_gauge.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_usgs_gauge.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_usgs_gauge.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_usgs_gauge.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeUsgsGaugeQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_usgs_gauge.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeUsgsGaugeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeUsgsGaugeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_usgs_gauge.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeVirtualQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_virtual.$get>>,
) {
  return ['repository', '/repository/search/type/type_virtual', toValue(args)] as const
}

export function getRepositorySearchTypeTypeVirtualQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_virtual.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeVirtualQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_virtual.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeVirtual<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_virtual.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.type_virtual.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_virtual.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_virtual.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeVirtualQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_virtual.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeVirtualQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeVirtualQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_virtual.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeWmsCapabilitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_wms_capabilities.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_wms_capabilities', toValue(args)] as const
}

export function getRepositorySearchTypeTypeWmsCapabilitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_wms_capabilities.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeWmsCapabilitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_wms_capabilities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeWmsCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_wms_capabilities.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_wms_capabilities.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_wms_capabilities.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_wms_capabilities.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeWmsCapabilitiesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_wms_capabilities.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeWmsCapabilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeWmsCapabilitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_wms_capabilities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeTypeWmsLayerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_wms_layer.$get>
  >,
) {
  return ['repository', '/repository/search/type/type_wms_layer', toValue(args)] as const
}

export function getRepositorySearchTypeTypeWmsLayerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_wms_layer.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeTypeWmsLayerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.type_wms_layer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeTypeWmsLayer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_wms_layer.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.repository.search.type.type_wms_layer.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_wms_layer.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.type_wms_layer.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeTypeWmsLayerQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.type_wms_layer.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeWmsLayerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeTypeWmsLayerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.type_wms_layer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeUfoSightingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.ufo_sightings.$get>>,
) {
  return ['repository', '/repository/search/type/ufo_sightings', toValue(args)] as const
}

export function getRepositorySearchTypeUfoSightingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.ufo_sightings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeUfoSightingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.ufo_sightings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeUfoSightings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.ufo_sightings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.ufo_sightings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.ufo_sightings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.ufo_sightings.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeUfoSightingsQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.ufo_sightings.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeUfoSightingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeUfoSightingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.ufo_sightings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeUsPlacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.us_places.$get>>,
) {
  return ['repository', '/repository/search/type/us_places', toValue(args)] as const
}

export function getRepositorySearchTypeUsPlacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.us_places.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeUsPlacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.us_places.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeUsPlaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.us_places.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.us_places.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.us_places.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.us_places.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeUsPlacesQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.us_places.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeUsPlacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeUsPlacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.us_places.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeVoteYesnoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.vote_yesno.$get>>,
) {
  return ['repository', '/repository/search/type/vote_yesno', toValue(args)] as const
}

export function getRepositorySearchTypeVoteYesnoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.vote_yesno.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeVoteYesnoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.vote_yesno.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeVoteYesno<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.vote_yesno.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.vote_yesno.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.vote_yesno.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.vote_yesno.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeVoteYesnoQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.vote_yesno.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeVoteYesnoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeVoteYesnoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.vote_yesno.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeWeblogQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.weblog.$get>>,
) {
  return ['repository', '/repository/search/type/weblog', toValue(args)] as const
}

export function getRepositorySearchTypeWeblogQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.weblog.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeWeblogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.weblog.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeWeblog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.weblog.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.weblog.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.weblog.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.weblog.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeWeblogQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.weblog.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeWeblogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeWeblogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.weblog.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositorySearchTypeWikipageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.wikipage.$get>>,
) {
  return ['repository', '/repository/search/type/wikipage', toValue(args)] as const
}

export function getRepositorySearchTypeWikipageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.wikipage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositorySearchTypeWikipageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repository.search.type.wikipage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositorySearchTypeWikipage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.wikipage.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.repository.search.type.wikipage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.wikipage.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.repository.search.type.wikipage.$get>>
              >
            >
          >,
          ReturnType<typeof getRepositorySearchTypeWikipageQueryKey>
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
          Awaited<ReturnType<typeof client.repository.search.type.wikipage.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeWikipageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositorySearchTypeWikipageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repository.search.type.wikipage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
