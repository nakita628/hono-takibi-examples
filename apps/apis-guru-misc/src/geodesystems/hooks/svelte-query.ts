import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRepositoryKey() {
  return ['repository'] as const
}

export function getRepositoryEntryShowQueryKey(
  args: InferRequestType<typeof client.repository.entry.show.$get>,
) {
  return ['repository', '/repository/entry/show', args] as const
}

export function getRepositoryEntryShowQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repository.entry.show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.entry.show.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.entry.show.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoryEntryShowQueryKey>
  >({
    queryKey: getRepositoryEntryShowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.entry.show.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoryEntryShow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repository.entry.show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.entry.show.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.repository.entry.show.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositoryEntryShowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRepositoryEntryShowQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRepositorySearchType2017BoulderElectionExpendituresQueryKey(
  args: InferRequestType<
    (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
  >,
) {
  return ['repository', '/repository/search/type/2017_boulder_election_expenditures', args] as const
}

export function getRepositorySearchType2017BoulderElectionExpendituresQueryOptions<
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
  args: InferRequestType<
    (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchType2017BoulderElectionExpendituresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type['2017_boulder_election_expenditures'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchType2017BoulderElectionExpenditures<
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
  args: () => InferRequestType<
    (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchType2017BoulderElectionExpendituresQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeAnyQueryKey(
  args: InferRequestType<typeof client.repository.search.type.any.$get>,
) {
  return ['repository', '/repository/search/type/any', args] as const
}

export function getRepositorySearchTypeAnyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.any.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.any.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.any.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeAnyQueryKey>
  >({
    queryKey: getRepositorySearchTypeAnyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.any.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeAny<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.any.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.any.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.any.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeAnyQueryKey>
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
      ...getRepositorySearchTypeAnyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBeforeafterQueryKey(
  args: InferRequestType<typeof client.repository.search.type.beforeafter.$get>,
) {
  return ['repository', '/repository/search/type/beforeafter', args] as const
}

export function getRepositorySearchTypeBeforeafterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.beforeafter.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.beforeafter.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBeforeafterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.beforeafter.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBeforeafter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.beforeafter.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.beforeafter.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBeforeafterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBiblioQueryKey(
  args: InferRequestType<typeof client.repository.search.type.biblio.$get>,
) {
  return ['repository', '/repository/search/type/biblio', args] as const
}

export function getRepositorySearchTypeBiblioQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.biblio.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.biblio.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.biblio.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBiblioQueryKey>
  >({
    queryKey: getRepositorySearchTypeBiblioQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.biblio.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBiblio<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.biblio.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.biblio.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.biblio.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeBiblioQueryKey>
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
      ...getRepositorySearchTypeBiblioQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioDicomQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_dicom.$get>,
) {
  return ['repository', '/repository/search/type/bio_dicom', args] as const
}

export function getRepositorySearchTypeBioDicomQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_dicom.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_dicom.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioDicomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_dicom.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioDicom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_dicom.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_dicom.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioDicomQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioDicomTestQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_dicom_test.$get>,
) {
  return ['repository', '/repository/search/type/bio_dicom_test', args] as const
}

export function getRepositorySearchTypeBioDicomTestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_dicom_test.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_dicom_test.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioDicomTestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_dicom_test.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioDicomTest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_dicom_test.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_dicom_test.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioDicomTestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioFastaQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_fasta.$get>,
) {
  return ['repository', '/repository/search/type/bio_fasta', args] as const
}

export function getRepositorySearchTypeBioFastaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_fasta.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_fasta.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioFastaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_fasta.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioFasta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_fasta.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_fasta.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioFastaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioFastqQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_fastq.$get>,
) {
  return ['repository', '/repository/search/type/bio_fastq', args] as const
}

export function getRepositorySearchTypeBioFastqQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_fastq.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_fastq.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioFastqQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_fastq.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioFastq<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_fastq.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_fastq.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioFastqQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioHmmerIndexQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_hmmer_index.$get>,
) {
  return ['repository', '/repository/search/type/bio_hmmer_index', args] as const
}

export function getRepositorySearchTypeBioHmmerIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_hmmer_index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_hmmer_index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioHmmerIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_hmmer_index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioHmmerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_hmmer_index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_hmmer_index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioHmmerIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioOmeTiffQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_ome_tiff.$get>,
) {
  return ['repository', '/repository/search/type/bio_ome_tiff', args] as const
}

export function getRepositorySearchTypeBioOmeTiffQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ome_tiff.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_ome_tiff.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioOmeTiffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_ome_tiff.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioOmeTiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ome_tiff.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_ome_tiff.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioOmeTiffQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioOntologyAssayQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_assay.$get>,
) {
  return ['repository', '/repository/search/type/bio_ontology_assay', args] as const
}

export function getRepositorySearchTypeBioOntologyAssayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_assay.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_assay.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioOntologyAssayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_ontology_assay.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioOntologyAssay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_assay.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_ontology_assay.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioOntologyAssayQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioOntologyCohortQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_cohort.$get>,
) {
  return ['repository', '/repository/search/type/bio_ontology_cohort', args] as const
}

export function getRepositorySearchTypeBioOntologyCohortQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_cohort.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_cohort.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioOntologyCohortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_ontology_cohort.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioOntologyCohort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_cohort.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_ontology_cohort.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioOntologyCohortQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioOntologyPersonQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_person.$get>,
) {
  return ['repository', '/repository/search/type/bio_ontology_person', args] as const
}

export function getRepositorySearchTypeBioOntologyPersonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_person.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_person.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioOntologyPersonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_ontology_person.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioOntologyPerson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_person.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_ontology_person.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioOntologyPersonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioOntologySampleQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_sample.$get>,
) {
  return ['repository', '/repository/search/type/bio_ontology_sample', args] as const
}

export function getRepositorySearchTypeBioOntologySampleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_sample.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_sample.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioOntologySampleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_ontology_sample.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioOntologySample<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_sample.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_ontology_sample.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioOntologySampleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioOntologySeriesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_series.$get>,
) {
  return ['repository', '/repository/search/type/bio_ontology_series', args] as const
}

export function getRepositorySearchTypeBioOntologySeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_series.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioOntologySeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_ontology_series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioOntologySeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_ontology_series.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioOntologySeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioOntologyStudyQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_study.$get>,
) {
  return ['repository', '/repository/search/type/bio_ontology_study', args] as const
}

export function getRepositorySearchTypeBioOntologyStudyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_study.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_study.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioOntologyStudyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_ontology_study.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioOntologyStudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_study.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_ontology_study.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioOntologyStudyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioSamQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_sam.$get>,
) {
  return ['repository', '/repository/search/type/bio_sam', args] as const
}

export function getRepositorySearchTypeBioSamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_sam.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_sam.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_sam.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioSamQueryKey>
  >({
    queryKey: getRepositorySearchTypeBioSamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_sam.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioSam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_sam.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_sam.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.bio_sam.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeBioSamQueryKey>
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
      ...getRepositorySearchTypeBioSamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioSfPdbQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_sf_pdb.$get>,
) {
  return ['repository', '/repository/search/type/bio_sf_pdb', args] as const
}

export function getRepositorySearchTypeBioSfPdbQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_sf_pdb.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_sf_pdb.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioSfPdbQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_sf_pdb.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioSfPdb<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_sf_pdb.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_sf_pdb.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioSfPdbQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioSraQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_sra.$get>,
) {
  return ['repository', '/repository/search/type/bio_sra', args] as const
}

export function getRepositorySearchTypeBioSraQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_sra.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_sra.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_sra.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeBioSraQueryKey>
  >({
    queryKey: getRepositorySearchTypeBioSraQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_sra.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioSra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bio_sra.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_sra.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.bio_sra.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeBioSraQueryKey>
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
      ...getRepositorySearchTypeBioSraQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioStockholmQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_stockholm.$get>,
) {
  return ['repository', '/repository/search/type/bio_stockholm', args] as const
}

export function getRepositorySearchTypeBioStockholmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_stockholm.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_stockholm.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioStockholmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_stockholm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioStockholm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_stockholm.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_stockholm.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioStockholmQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBioTaxonomyQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bio_taxonomy.$get>,
) {
  return ['repository', '/repository/search/type/bio_taxonomy', args] as const
}

export function getRepositorySearchTypeBioTaxonomyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_taxonomy.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bio_taxonomy.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBioTaxonomyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bio_taxonomy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBioTaxonomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bio_taxonomy.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bio_taxonomy.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBioTaxonomyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBlogentryQueryKey(
  args: InferRequestType<typeof client.repository.search.type.blogentry.$get>,
) {
  return ['repository', '/repository/search/type/blogentry', args] as const
}

export function getRepositorySearchTypeBlogentryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.blogentry.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.blogentry.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBlogentryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.blogentry.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBlogentry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.blogentry.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.blogentry.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBlogentryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBolderRentalHousingQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bolder_rental_housing.$get>,
) {
  return ['repository', '/repository/search/type/bolder_rental_housing', args] as const
}

export function getRepositorySearchTypeBolderRentalHousingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bolder_rental_housing.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bolder_rental_housing.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBolderRentalHousingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bolder_rental_housing.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBolderRentalHousing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.bolder_rental_housing.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bolder_rental_housing.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBolderRentalHousingQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBookmarksQueryKey(
  args: InferRequestType<typeof client.repository.search.type.bookmarks.$get>,
) {
  return ['repository', '/repository/search/type/bookmarks', args] as const
}

export function getRepositorySearchTypeBookmarksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bookmarks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.bookmarks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBookmarksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.bookmarks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.bookmarks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.bookmarks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBookmarksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBostonCrimeQueryKey(
  args: InferRequestType<typeof client.repository.search.type.boston_crime.$get>,
) {
  return ['repository', '/repository/search/type/boston_crime', args] as const
}

export function getRepositorySearchTypeBostonCrimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boston_crime.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.boston_crime.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBostonCrimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.boston_crime.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBostonCrime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boston_crime.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.boston_crime.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBostonCrimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBoulder2017ElectionContributionsQueryKey(
  args: InferRequestType<
    typeof client.repository.search.type.boulder_2017_election_contributions.$get
  >,
) {
  return [
    'repository',
    '/repository/search/type/boulder_2017_election_contributions',
    args,
  ] as const
}

export function getRepositorySearchTypeBoulder2017ElectionContributionsQueryOptions<
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
  args: InferRequestType<
    typeof client.repository.search.type.boulder_2017_election_contributions.$get
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBoulder2017ElectionContributionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.boulder_2017_election_contributions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBoulder2017ElectionContributions<
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
  args: () => InferRequestType<
    typeof client.repository.search.type.boulder_2017_election_contributions.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBoulder2017ElectionContributionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBoulderCampaignContributionsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.boulder_campaign_contributions.$get>,
) {
  return ['repository', '/repository/search/type/boulder_campaign_contributions', args] as const
}

export function getRepositorySearchTypeBoulderCampaignContributionsQueryOptions<
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
  args: InferRequestType<typeof client.repository.search.type.boulder_campaign_contributions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBoulderCampaignContributionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.boulder_campaign_contributions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBoulderCampaignContributions<
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
  args: () => InferRequestType<
    typeof client.repository.search.type.boulder_campaign_contributions.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBoulderCampaignContributionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBoulderConsultingServicesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.boulder_consulting_services.$get>,
) {
  return ['repository', '/repository/search/type/boulder_consulting_services', args] as const
}

export function getRepositorySearchTypeBoulderConsultingServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_consulting_services.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.boulder_consulting_services.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBoulderConsultingServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.boulder_consulting_services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBoulderConsultingServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_consulting_services.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.repository.search.type.boulder_consulting_services.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeBoulderConsultingServicesQueryKey>
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
      ...getRepositorySearchTypeBoulderConsultingServicesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBoulderCountyVoterDetailsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.boulder_county_voter_details.$get>,
) {
  return ['repository', '/repository/search/type/boulder_county_voter_details', args] as const
}

export function getRepositorySearchTypeBoulderCountyVoterDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_county_voter_details.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.boulder_county_voter_details.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBoulderCountyVoterDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.boulder_county_voter_details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBoulderCountyVoterDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_county_voter_details.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.repository.search.type.boulder_county_voter_details.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBoulderCountyVoterDetailsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBoulderCrimesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.boulder_crimes.$get>,
) {
  return ['repository', '/repository/search/type/boulder_crimes', args] as const
}

export function getRepositorySearchTypeBoulderCrimesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_crimes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.boulder_crimes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBoulderCrimesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.boulder_crimes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBoulderCrimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_crimes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.boulder_crimes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBoulderCrimesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBoulderEmailsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.boulder_emails.$get>,
) {
  return ['repository', '/repository/search/type/boulder_emails', args] as const
}

export function getRepositorySearchTypeBoulderEmailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_emails.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.boulder_emails.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBoulderEmailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.boulder_emails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBoulderEmails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_emails.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.boulder_emails.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeBoulderEmailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeBoulderEmployeeSalariesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.boulder_employee_salaries.$get>,
) {
  return ['repository', '/repository/search/type/boulder_employee_salaries', args] as const
}

export function getRepositorySearchTypeBoulderEmployeeSalariesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_employee_salaries.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.boulder_employee_salaries.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeBoulderEmployeeSalariesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.boulder_employee_salaries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeBoulderEmployeeSalaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.boulder_employee_salaries.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.boulder_employee_salaries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeBoulderEmployeeSalariesQueryKey>
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
      ...getRepositorySearchTypeBoulderEmployeeSalariesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeCalendarQueryKey(
  args: InferRequestType<typeof client.repository.search.type.calendar.$get>,
) {
  return ['repository', '/repository/search/type/calendar', args] as const
}

export function getRepositorySearchTypeCalendarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.calendar.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.calendar.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeCalendarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.calendar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeCalendar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.calendar.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.calendar.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeCalendarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeCampaignDonorsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.campaign_donors.$get>,
) {
  return ['repository', '/repository/search/type/campaign_donors', args] as const
}

export function getRepositorySearchTypeCampaignDonorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.campaign_donors.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.campaign_donors.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeCampaignDonorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.campaign_donors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeCampaignDonors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.campaign_donors.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.campaign_donors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeCampaignDonorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeCampaignExpendituresQueryKey(
  args: InferRequestType<typeof client.repository.search.type.campaign_expenditures.$get>,
) {
  return ['repository', '/repository/search/type/campaign_expenditures', args] as const
}

export function getRepositorySearchTypeCampaignExpendituresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.campaign_expenditures.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.campaign_expenditures.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeCampaignExpendituresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.campaign_expenditures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeCampaignExpenditures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.campaign_expenditures.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.campaign_expenditures.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeCampaignExpendituresQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeCataloglinkQueryKey(
  args: InferRequestType<typeof client.repository.search.type.cataloglink.$get>,
) {
  return ['repository', '/repository/search/type/cataloglink', args] as const
}

export function getRepositorySearchTypeCataloglinkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.cataloglink.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.cataloglink.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeCataloglinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.cataloglink.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeCataloglink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.cataloglink.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.cataloglink.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeCataloglinkQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeCdmGridQueryKey(
  args: InferRequestType<typeof client.repository.search.type.cdm_grid.$get>,
) {
  return ['repository', '/repository/search/type/cdm_grid', args] as const
}

export function getRepositorySearchTypeCdmGridQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.cdm_grid.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.cdm_grid.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeCdmGridQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.cdm_grid.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeCdmGrid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.cdm_grid.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.cdm_grid.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeCdmGridQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeChatroomQueryKey(
  args: InferRequestType<typeof client.repository.search.type.chatroom.$get>,
) {
  return ['repository', '/repository/search/type/chatroom', args] as const
}

export function getRepositorySearchTypeChatroomQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.chatroom.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.chatroom.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeChatroomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.chatroom.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeChatroom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.chatroom.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.chatroom.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeChatroomQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeColoradoWaterRightsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.colorado_water_rights.$get>,
) {
  return ['repository', '/repository/search/type/colorado_water_rights', args] as const
}

export function getRepositorySearchTypeColoradoWaterRightsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.colorado_water_rights.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.colorado_water_rights.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeColoradoWaterRightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.colorado_water_rights.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeColoradoWaterRights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.colorado_water_rights.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.colorado_water_rights.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeColoradoWaterRightsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeCommitteeDonationsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.committee_donations.$get>,
) {
  return ['repository', '/repository/search/type/committee_donations', args] as const
}

export function getRepositorySearchTypeCommitteeDonationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.committee_donations.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.committee_donations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeCommitteeDonationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.committee_donations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeCommitteeDonations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.committee_donations.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.committee_donations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeCommitteeDonationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeCommunityDatahubQueryKey(
  args: InferRequestType<typeof client.repository.search.type.community_datahub.$get>,
) {
  return ['repository', '/repository/search/type/community_datahub', args] as const
}

export function getRepositorySearchTypeCommunityDatahubQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.community_datahub.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.community_datahub.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeCommunityDatahubQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.community_datahub.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeCommunityDatahub<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.community_datahub.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.community_datahub.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeCommunityDatahubQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeCommunityResourceQueryKey(
  args: InferRequestType<typeof client.repository.search.type.community_resource.$get>,
) {
  return ['repository', '/repository/search/type/community_resource', args] as const
}

export function getRepositorySearchTypeCommunityResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.community_resource.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.community_resource.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeCommunityResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.community_resource.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeCommunityResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.community_resource.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.community_resource.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeCommunityResourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeConstructionPermitsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.construction_permits.$get>,
) {
  return ['repository', '/repository/search/type/construction_permits', args] as const
}

export function getRepositorySearchTypeConstructionPermitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.construction_permits.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.construction_permits.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeConstructionPermitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.construction_permits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeConstructionPermits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.construction_permits.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.construction_permits.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeConstructionPermitsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeContactQueryKey(
  args: InferRequestType<typeof client.repository.search.type.contact.$get>,
) {
  return ['repository', '/repository/search/type/contact', args] as const
}

export function getRepositorySearchTypeContactQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.contact.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.contact.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.contact.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeContactQueryKey>
  >({
    queryKey: getRepositorySearchTypeContactQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.contact.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.contact.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.contact.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.contact.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeContactQueryKey>
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
      ...getRepositorySearchTypeContactQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeDbCoIndicatorsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.db_co_indicators.$get>,
) {
  return ['repository', '/repository/search/type/db_co_indicators', args] as const
}

export function getRepositorySearchTypeDbCoIndicatorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.db_co_indicators.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.db_co_indicators.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeDbCoIndicatorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.db_co_indicators.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeDbCoIndicators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.db_co_indicators.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.db_co_indicators.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeDbCoIndicatorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeEarthSatelliteLandsatQueryKey(
  args: InferRequestType<typeof client.repository.search.type.earth_satellite_landsat.$get>,
) {
  return ['repository', '/repository/search/type/earth_satellite_landsat', args] as const
}

export function getRepositorySearchTypeEarthSatelliteLandsatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.earth_satellite_landsat.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.earth_satellite_landsat.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeEarthSatelliteLandsatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.earth_satellite_landsat.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeEarthSatelliteLandsat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.earth_satellite_landsat.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.earth_satellite_landsat.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeEarthSatelliteLandsatQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeFaqQueryKey(
  args: InferRequestType<typeof client.repository.search.type.faq.$get>,
) {
  return ['repository', '/repository/search/type/faq', args] as const
}

export function getRepositorySearchTypeFaqQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.faq.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.faq.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.faq.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeFaqQueryKey>
  >({
    queryKey: getRepositorySearchTypeFaqQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.faq.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeFaq<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.faq.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.faq.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.faq.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeFaqQueryKey>
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
      ...getRepositorySearchTypeFaqQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeFecPacsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.fec_pacs.$get>,
) {
  return ['repository', '/repository/search/type/fec_pacs', args] as const
}

export function getRepositorySearchTypeFecPacsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.fec_pacs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.fec_pacs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeFecPacsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.fec_pacs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeFecPacs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.fec_pacs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.fec_pacs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeFecPacsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeFeccandidatesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.feccandidates.$get>,
) {
  return ['repository', '/repository/search/type/feccandidates', args] as const
}

export function getRepositorySearchTypeFeccandidatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.feccandidates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.feccandidates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeFeccandidatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.feccandidates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeFeccandidates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.feccandidates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.feccandidates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeFeccandidatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeFeedQueryKey(
  args: InferRequestType<typeof client.repository.search.type.feed.$get>,
) {
  return ['repository', '/repository/search/type/feed', args] as const
}

export function getRepositorySearchTypeFeedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.feed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.feed.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.feed.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeFeedQueryKey>
  >({
    queryKey: getRepositorySearchTypeFeedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.feed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeFeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.feed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.feed.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.feed.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeFeedQueryKey>
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
      ...getRepositorySearchTypeFeedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeFileQueryKey(
  args: InferRequestType<typeof client.repository.search.type.file.$get>,
) {
  return ['repository', '/repository/search/type/file', args] as const
}

export function getRepositorySearchTypeFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.file.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.file.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.file.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeFileQueryKey>
  >({
    queryKey: getRepositorySearchTypeFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.file.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.file.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.file.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeFileQueryKey>
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
      ...getRepositorySearchTypeFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeFitsDataQueryKey(
  args: InferRequestType<typeof client.repository.search.type.fits_data.$get>,
) {
  return ['repository', '/repository/search/type/fits_data', args] as const
}

export function getRepositorySearchTypeFitsDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.fits_data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.fits_data.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeFitsDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.fits_data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeFitsData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.fits_data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.fits_data.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeFitsDataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeFtpQueryKey(
  args: InferRequestType<typeof client.repository.search.type.ftp.$get>,
) {
  return ['repository', '/repository/search/type/ftp', args] as const
}

export function getRepositorySearchTypeFtpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.ftp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.ftp.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.ftp.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeFtpQueryKey>
  >({
    queryKey: getRepositorySearchTypeFtpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.ftp.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeFtp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.ftp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.ftp.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.ftp.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeFtpQueryKey>
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
      ...getRepositorySearchTypeFtpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGadgetsCountdownQueryKey(
  args: InferRequestType<typeof client.repository.search.type.gadgets_countdown.$get>,
) {
  return ['repository', '/repository/search/type/gadgets_countdown', args] as const
}

export function getRepositorySearchTypeGadgetsCountdownQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gadgets_countdown.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.gadgets_countdown.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeGadgetsCountdownQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.gadgets_countdown.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGadgetsCountdown<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gadgets_countdown.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.gadgets_countdown.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeGadgetsCountdownQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGadgetsStockQueryKey(
  args: InferRequestType<typeof client.repository.search.type.gadgets_stock.$get>,
) {
  return ['repository', '/repository/search/type/gadgets_stock', args] as const
}

export function getRepositorySearchTypeGadgetsStockQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gadgets_stock.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.gadgets_stock.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeGadgetsStockQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.gadgets_stock.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGadgetsStock<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gadgets_stock.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.gadgets_stock.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeGadgetsStockQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGadgetsWeatherQueryKey(
  args: InferRequestType<typeof client.repository.search.type.gadgets_weather.$get>,
) {
  return ['repository', '/repository/search/type/gadgets_weather', args] as const
}

export function getRepositorySearchTypeGadgetsWeatherQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gadgets_weather.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.gadgets_weather.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeGadgetsWeatherQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.gadgets_weather.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGadgetsWeather<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gadgets_weather.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.gadgets_weather.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeGadgetsWeatherQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGazeteerCensusTractsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.gazeteer_census_tracts.$get>,
) {
  return ['repository', '/repository/search/type/gazeteer_census_tracts', args] as const
}

export function getRepositorySearchTypeGazeteerCensusTractsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gazeteer_census_tracts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.gazeteer_census_tracts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeGazeteerCensusTractsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.gazeteer_census_tracts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGazeteerCensusTracts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gazeteer_census_tracts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.gazeteer_census_tracts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeGazeteerCensusTractsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGazeteerCountiesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.gazeteer_counties.$get>,
) {
  return ['repository', '/repository/search/type/gazeteer_counties', args] as const
}

export function getRepositorySearchTypeGazeteerCountiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gazeteer_counties.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.gazeteer_counties.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeGazeteerCountiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.gazeteer_counties.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGazeteerCounties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gazeteer_counties.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.gazeteer_counties.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeGazeteerCountiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGeoGeojsonQueryKey(
  args: InferRequestType<typeof client.repository.search.type.geo_geojson.$get>,
) {
  return ['repository', '/repository/search/type/geo_geojson', args] as const
}

export function getRepositorySearchTypeGeoGeojsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.geo_geojson.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.geo_geojson.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeGeoGeojsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.geo_geojson.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGeoGeojson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.geo_geojson.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.geo_geojson.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeGeoGeojsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGeoGeotiffQueryKey(
  args: InferRequestType<typeof client.repository.search.type.geo_geotiff.$get>,
) {
  return ['repository', '/repository/search/type/geo_geotiff', args] as const
}

export function getRepositorySearchTypeGeoGeotiffQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.geo_geotiff.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.geo_geotiff.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeGeoGeotiffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.geo_geotiff.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGeoGeotiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.geo_geotiff.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.geo_geotiff.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeGeoGeotiffQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGeoGpxQueryKey(
  args: InferRequestType<typeof client.repository.search.type.geo_gpx.$get>,
) {
  return ['repository', '/repository/search/type/geo_gpx', args] as const
}

export function getRepositorySearchTypeGeoGpxQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.geo_gpx.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.geo_gpx.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.geo_gpx.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGeoGpxQueryKey>
  >({
    queryKey: getRepositorySearchTypeGeoGpxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.geo_gpx.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGeoGpx<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.geo_gpx.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.geo_gpx.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.geo_gpx.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeGeoGpxQueryKey>
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
      ...getRepositorySearchTypeGeoGpxQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGeoHdf5QueryKey(
  args: InferRequestType<typeof client.repository.search.type.geo_hdf5.$get>,
) {
  return ['repository', '/repository/search/type/geo_hdf5', args] as const
}

export function getRepositorySearchTypeGeoHdf5QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.geo_hdf5.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.geo_hdf5.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeGeoHdf5QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.geo_hdf5.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGeoHdf5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.geo_hdf5.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.geo_hdf5.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeGeoHdf5QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGeoKmlQueryKey(
  args: InferRequestType<typeof client.repository.search.type.geo_kml.$get>,
) {
  return ['repository', '/repository/search/type/geo_kml', args] as const
}

export function getRepositorySearchTypeGeoKmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.geo_kml.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.geo_kml.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.geo_kml.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGeoKmlQueryKey>
  >({
    queryKey: getRepositorySearchTypeGeoKmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.geo_kml.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGeoKml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.geo_kml.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.geo_kml.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.geo_kml.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeGeoKmlQueryKey>
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
      ...getRepositorySearchTypeGeoKmlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGeoShapefileQueryKey(
  args: InferRequestType<typeof client.repository.search.type.geo_shapefile.$get>,
) {
  return ['repository', '/repository/search/type/geo_shapefile', args] as const
}

export function getRepositorySearchTypeGeoShapefileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.geo_shapefile.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeGeoShapefileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.geo_shapefile.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGeoShapefile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.geo_shapefile.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeGeoShapefileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGeoShapefileFipsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.geo_shapefile_fips.$get>,
) {
  return ['repository', '/repository/search/type/geo_shapefile_fips', args] as const
}

export function getRepositorySearchTypeGeoShapefileFipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile_fips.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.geo_shapefile_fips.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeGeoShapefileFipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.geo_shapefile_fips.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGeoShapefileFips<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile_fips.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.geo_shapefile_fips.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeGeoShapefileFipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGlossaryQueryKey(
  args: InferRequestType<typeof client.repository.search.type.glossary.$get>,
) {
  return ['repository', '/repository/search/type/glossary', args] as const
}

export function getRepositorySearchTypeGlossaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.glossary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.glossary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeGlossaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.glossary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGlossary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.glossary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.glossary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeGlossaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGridaggregationQueryKey(
  args: InferRequestType<typeof client.repository.search.type.gridaggregation.$get>,
) {
  return ['repository', '/repository/search/type/gridaggregation', args] as const
}

export function getRepositorySearchTypeGridaggregationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gridaggregation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.gridaggregation.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeGridaggregationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.gridaggregation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGridaggregation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.gridaggregation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.gridaggregation.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeGridaggregationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeGroupQueryKey(
  args: InferRequestType<typeof client.repository.search.type.group.$get>,
) {
  return ['repository', '/repository/search/type/group', args] as const
}

export function getRepositorySearchTypeGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.group.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.group.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.group.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeGroupQueryKey>
  >({
    queryKey: getRepositorySearchTypeGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.group.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.group.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.group.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.group.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeGroupQueryKey>
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
      ...getRepositorySearchTypeGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeHipchatGroupQueryKey(
  args: InferRequestType<typeof client.repository.search.type.hipchat_group.$get>,
) {
  return ['repository', '/repository/search/type/hipchat_group', args] as const
}

export function getRepositorySearchTypeHipchatGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.hipchat_group.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.hipchat_group.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeHipchatGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.hipchat_group.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeHipchatGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.hipchat_group.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.hipchat_group.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeHipchatGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeHomepageQueryKey(
  args: InferRequestType<typeof client.repository.search.type.homepage.$get>,
) {
  return ['repository', '/repository/search/type/homepage', args] as const
}

export function getRepositorySearchTypeHomepageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.homepage.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.homepage.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeHomepageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.homepage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeHomepage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.homepage.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.homepage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeHomepageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeIncidentQueryKey(
  args: InferRequestType<typeof client.repository.search.type.incident.$get>,
) {
  return ['repository', '/repository/search/type/incident', args] as const
}

export function getRepositorySearchTypeIncidentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.incident.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.incident.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeIncidentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.incident.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeIncident<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.incident.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.incident.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeIncidentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeJeopardyQueryKey(
  args: InferRequestType<typeof client.repository.search.type.jeopardy.$get>,
) {
  return ['repository', '/repository/search/type/jeopardy', args] as const
}

export function getRepositorySearchTypeJeopardyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.jeopardy.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.jeopardy.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeJeopardyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.jeopardy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeJeopardy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.jeopardy.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.jeopardy.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeJeopardyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeLatlonimageQueryKey(
  args: InferRequestType<typeof client.repository.search.type.latlonimage.$get>,
) {
  return ['repository', '/repository/search/type/latlonimage', args] as const
}

export function getRepositorySearchTypeLatlonimageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.latlonimage.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.latlonimage.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeLatlonimageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.latlonimage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeLatlonimage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.latlonimage.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.latlonimage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeLatlonimageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeLidarCollectionQueryKey(
  args: InferRequestType<typeof client.repository.search.type.lidar_collection.$get>,
) {
  return ['repository', '/repository/search/type/lidar_collection', args] as const
}

export function getRepositorySearchTypeLidarCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.lidar_collection.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.lidar_collection.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeLidarCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.lidar_collection.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeLidarCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.lidar_collection.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.lidar_collection.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeLidarCollectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeLidarLasQueryKey(
  args: InferRequestType<typeof client.repository.search.type.lidar_las.$get>,
) {
  return ['repository', '/repository/search/type/lidar_las', args] as const
}

export function getRepositorySearchTypeLidarLasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.lidar_las.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.lidar_las.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeLidarLasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.lidar_las.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeLidarLas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.lidar_las.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.lidar_las.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeLidarLasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeLidarLvisQueryKey(
  args: InferRequestType<typeof client.repository.search.type.lidar_lvis.$get>,
) {
  return ['repository', '/repository/search/type/lidar_lvis', args] as const
}

export function getRepositorySearchTypeLidarLvisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.lidar_lvis.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.lidar_lvis.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeLidarLvisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.lidar_lvis.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeLidarLvis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.lidar_lvis.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.lidar_lvis.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeLidarLvisQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeLinkQueryKey(
  args: InferRequestType<typeof client.repository.search.type.link.$get>,
) {
  return ['repository', '/repository/search/type/link', args] as const
}

export function getRepositorySearchTypeLinkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.link.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.link.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.link.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeLinkQueryKey>
  >({
    queryKey: getRepositorySearchTypeLinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.link.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.link.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.link.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.link.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeLinkQueryKey>
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
      ...getRepositorySearchTypeLinkQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeLocalfilesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.localfiles.$get>,
) {
  return ['repository', '/repository/search/type/localfiles', args] as const
}

export function getRepositorySearchTypeLocalfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.localfiles.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.localfiles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeLocalfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.localfiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeLocalfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.localfiles.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.localfiles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeLocalfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeLocationsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.locations.$get>,
) {
  return ['repository', '/repository/search/type/locations', args] as const
}

export function getRepositorySearchTypeLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.locations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.locations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.locations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.locations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeLocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeMapGooglemapQueryKey(
  args: InferRequestType<typeof client.repository.search.type.map_googlemap.$get>,
) {
  return ['repository', '/repository/search/type/map_googlemap', args] as const
}

export function getRepositorySearchTypeMapGooglemapQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.map_googlemap.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.map_googlemap.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeMapGooglemapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.map_googlemap.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeMapGooglemap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.map_googlemap.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.map_googlemap.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeMapGooglemapQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeMediaAudiofileQueryKey(
  args: InferRequestType<typeof client.repository.search.type.media_audiofile.$get>,
) {
  return ['repository', '/repository/search/type/media_audiofile', args] as const
}

export function getRepositorySearchTypeMediaAudiofileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_audiofile.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.media_audiofile.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeMediaAudiofileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.media_audiofile.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeMediaAudiofile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_audiofile.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.media_audiofile.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeMediaAudiofileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeMediaImageloopQueryKey(
  args: InferRequestType<typeof client.repository.search.type.media_imageloop.$get>,
) {
  return ['repository', '/repository/search/type/media_imageloop', args] as const
}

export function getRepositorySearchTypeMediaImageloopQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_imageloop.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.media_imageloop.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeMediaImageloopQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.media_imageloop.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeMediaImageloop<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_imageloop.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.media_imageloop.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeMediaImageloopQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeMediaPhotoalbumQueryKey(
  args: InferRequestType<typeof client.repository.search.type.media_photoalbum.$get>,
) {
  return ['repository', '/repository/search/type/media_photoalbum', args] as const
}

export function getRepositorySearchTypeMediaPhotoalbumQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_photoalbum.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.media_photoalbum.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeMediaPhotoalbumQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.media_photoalbum.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeMediaPhotoalbum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_photoalbum.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.media_photoalbum.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeMediaPhotoalbumQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeMediaVideoChannelQueryKey(
  args: InferRequestType<typeof client.repository.search.type.media_video_channel.$get>,
) {
  return ['repository', '/repository/search/type/media_video_channel', args] as const
}

export function getRepositorySearchTypeMediaVideoChannelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_video_channel.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.media_video_channel.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeMediaVideoChannelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.media_video_channel.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeMediaVideoChannel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_video_channel.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.media_video_channel.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeMediaVideoChannelQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeMediaVideoQuicktimeQueryKey(
  args: InferRequestType<typeof client.repository.search.type.media_video_quicktime.$get>,
) {
  return ['repository', '/repository/search/type/media_video_quicktime', args] as const
}

export function getRepositorySearchTypeMediaVideoQuicktimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_video_quicktime.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.media_video_quicktime.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeMediaVideoQuicktimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.media_video_quicktime.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeMediaVideoQuicktime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_video_quicktime.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.media_video_quicktime.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeMediaVideoQuicktimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeMediaYoutubevideoQueryKey(
  args: InferRequestType<typeof client.repository.search.type.media_youtubevideo.$get>,
) {
  return ['repository', '/repository/search/type/media_youtubevideo', args] as const
}

export function getRepositorySearchTypeMediaYoutubevideoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_youtubevideo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.media_youtubevideo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeMediaYoutubevideoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.media_youtubevideo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeMediaYoutubevideo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.media_youtubevideo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.media_youtubevideo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeMediaYoutubevideoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeNotesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.notes.$get>,
) {
  return ['repository', '/repository/search/type/notes', args] as const
}

export function getRepositorySearchTypeNotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.notes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.notes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.notes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeNotesQueryKey>
  >({
    queryKey: getRepositorySearchTypeNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.notes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.notes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.notes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.notes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeNotesQueryKey>
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
      ...getRepositorySearchTypeNotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeNotesJsonfileQueryKey(
  args: InferRequestType<typeof client.repository.search.type.notes_jsonfile.$get>,
) {
  return ['repository', '/repository/search/type/notes_jsonfile', args] as const
}

export function getRepositorySearchTypeNotesJsonfileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.notes_jsonfile.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.notes_jsonfile.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeNotesJsonfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.notes_jsonfile.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeNotesJsonfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.notes_jsonfile.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.notes_jsonfile.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeNotesJsonfileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeNotesNoteQueryKey(
  args: InferRequestType<typeof client.repository.search.type.notes_note.$get>,
) {
  return ['repository', '/repository/search/type/notes_note', args] as const
}

export function getRepositorySearchTypeNotesNoteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.notes_note.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.notes_note.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeNotesNoteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.notes_note.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeNotesNote<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.notes_note.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.notes_note.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeNotesNoteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeNotesNotebookQueryKey(
  args: InferRequestType<typeof client.repository.search.type.notes_notebook.$get>,
) {
  return ['repository', '/repository/search/type/notes_notebook', args] as const
}

export function getRepositorySearchTypeNotesNotebookQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.notes_notebook.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.notes_notebook.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeNotesNotebookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.notes_notebook.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeNotesNotebook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.notes_notebook.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.notes_notebook.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeNotesNotebookQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeNwsfeedQueryKey(
  args: InferRequestType<typeof client.repository.search.type.nwsfeed.$get>,
) {
  return ['repository', '/repository/search/type/nwsfeed', args] as const
}

export function getRepositorySearchTypeNwsfeedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.nwsfeed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.nwsfeed.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.nwsfeed.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeNwsfeedQueryKey>
  >({
    queryKey: getRepositorySearchTypeNwsfeedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.nwsfeed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeNwsfeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.nwsfeed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.nwsfeed.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.nwsfeed.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeNwsfeedQueryKey>
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
      ...getRepositorySearchTypeNwsfeedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeOpendaplinkQueryKey(
  args: InferRequestType<typeof client.repository.search.type.opendaplink.$get>,
) {
  return ['repository', '/repository/search/type/opendaplink', args] as const
}

export function getRepositorySearchTypeOpendaplinkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.opendaplink.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.opendaplink.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeOpendaplinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.opendaplink.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeOpendaplink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.opendaplink.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.opendaplink.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeOpendaplinkQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeOwlClassQueryKey(
  args: InferRequestType<(typeof client.repository.search.type)['owl.class']['$get']>,
) {
  return ['repository', '/repository/search/type/owl.class', args] as const
}

export function getRepositorySearchTypeOwlClassQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.repository.search.type)['owl.class']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.repository.search.type)['owl.class']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeOwlClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type['owl.class'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeOwlClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.repository.search.type)['owl.class']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.repository.search.type)['owl.class']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeOwlClassQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeOwlOntologyQueryKey(
  args: InferRequestType<(typeof client.repository.search.type)['owl.ontology']['$get']>,
) {
  return ['repository', '/repository/search/type/owl.ontology', args] as const
}

export function getRepositorySearchTypeOwlOntologyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.repository.search.type)['owl.ontology']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.repository.search.type)['owl.ontology']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeOwlOntologyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type['owl.ontology'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeOwlOntology<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.repository.search.type)['owl.ontology']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.repository.search.type)['owl.ontology']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeOwlOntologyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypePasteitentryQueryKey(
  args: InferRequestType<typeof client.repository.search.type.pasteitentry.$get>,
) {
  return ['repository', '/repository/search/type/pasteitentry', args] as const
}

export function getRepositorySearchTypePasteitentryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.pasteitentry.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.pasteitentry.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypePasteitentryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.pasteitentry.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypePasteitentry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.pasteitentry.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.pasteitentry.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypePasteitentryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypePointTextQueryKey(
  args: InferRequestType<typeof client.repository.search.type.point_text.$get>,
) {
  return ['repository', '/repository/search/type/point_text', args] as const
}

export function getRepositorySearchTypePointTextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.point_text.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.point_text.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypePointTextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.point_text.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypePointText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.point_text.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.point_text.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypePointTextQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypePoliceStopDataQueryKey(
  args: InferRequestType<typeof client.repository.search.type.police_stop_data.$get>,
) {
  return ['repository', '/repository/search/type/police_stop_data', args] as const
}

export function getRepositorySearchTypePoliceStopDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.police_stop_data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.police_stop_data.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypePoliceStopDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.police_stop_data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypePoliceStopData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.police_stop_data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.police_stop_data.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypePoliceStopDataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypePollQueryKey(
  args: InferRequestType<typeof client.repository.search.type.poll.$get>,
) {
  return ['repository', '/repository/search/type/poll', args] as const
}

export function getRepositorySearchTypePollQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.poll.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.poll.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.poll.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypePollQueryKey>
  >({
    queryKey: getRepositorySearchTypePollQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.poll.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypePoll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.poll.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.poll.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.poll.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypePollQueryKey>
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
      ...getRepositorySearchTypePollQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectCampaignQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_campaign.$get>,
) {
  return ['repository', '/repository/search/type/project_campaign', args] as const
}

export function getRepositorySearchTypeProjectCampaignQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_campaign.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_campaign.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectCampaignQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_campaign.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectCampaign<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_campaign.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_campaign.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectCampaignQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectCasestudyQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_casestudy.$get>,
) {
  return ['repository', '/repository/search/type/project_casestudy', args] as const
}

export function getRepositorySearchTypeProjectCasestudyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_casestudy.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_casestudy.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectCasestudyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_casestudy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectCasestudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_casestudy.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_casestudy.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectCasestudyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectContributionQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_contribution.$get>,
) {
  return ['repository', '/repository/search/type/project_contribution', args] as const
}

export function getRepositorySearchTypeProjectContributionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_contribution.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_contribution.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectContributionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_contribution.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectContribution<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_contribution.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_contribution.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectContributionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectDataformatQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_dataformat.$get>,
) {
  return ['repository', '/repository/search/type/project_dataformat', args] as const
}

export function getRepositorySearchTypeProjectDataformatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_dataformat.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_dataformat.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectDataformatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_dataformat.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectDataformat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_dataformat.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_dataformat.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectDataformatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectDatasetQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_dataset.$get>,
) {
  return ['repository', '/repository/search/type/project_dataset', args] as const
}

export function getRepositorySearchTypeProjectDatasetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_dataset.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_dataset.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectDatasetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_dataset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectDataset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_dataset.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_dataset.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectDatasetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectDeploymentQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_deployment.$get>,
) {
  return ['repository', '/repository/search/type/project_deployment', args] as const
}

export function getRepositorySearchTypeProjectDeploymentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_deployment.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_deployment.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectDeploymentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_deployment.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectDeployment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_deployment.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_deployment.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectDeploymentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectExperimentQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_experiment.$get>,
) {
  return ['repository', '/repository/search/type/project_experiment', args] as const
}

export function getRepositorySearchTypeProjectExperimentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_experiment.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_experiment.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectExperimentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_experiment.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectExperiment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_experiment.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_experiment.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectExperimentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectFieldnoteQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_fieldnote.$get>,
) {
  return ['repository', '/repository/search/type/project_fieldnote', args] as const
}

export function getRepositorySearchTypeProjectFieldnoteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_fieldnote.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_fieldnote.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectFieldnoteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_fieldnote.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectFieldnote<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_fieldnote.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_fieldnote.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectFieldnoteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectGpsControlpointsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_gps_controlpoints.$get>,
) {
  return ['repository', '/repository/search/type/project_gps_controlpoints', args] as const
}

export function getRepositorySearchTypeProjectGpsControlpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_gps_controlpoints.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_gps_controlpoints.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectGpsControlpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_gps_controlpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectGpsControlpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_gps_controlpoints.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_gps_controlpoints.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeProjectGpsControlpointsQueryKey>
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
      ...getRepositorySearchTypeProjectGpsControlpointsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectGpsRawQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_gps_raw.$get>,
) {
  return ['repository', '/repository/search/type/project_gps_raw', args] as const
}

export function getRepositorySearchTypeProjectGpsRawQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_gps_raw.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_gps_raw.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectGpsRawQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_gps_raw.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectGpsRaw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_gps_raw.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_gps_raw.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectGpsRawQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectGpsRinexQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_gps_rinex.$get>,
) {
  return ['repository', '/repository/search/type/project_gps_rinex', args] as const
}

export function getRepositorySearchTypeProjectGpsRinexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_gps_rinex.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_gps_rinex.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectGpsRinexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_gps_rinex.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectGpsRinex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_gps_rinex.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_gps_rinex.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectGpsRinexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectInstrumentQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_instrument.$get>,
) {
  return ['repository', '/repository/search/type/project_instrument', args] as const
}

export function getRepositorySearchTypeProjectInstrumentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_instrument.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_instrument.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectInstrumentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_instrument.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectInstrument<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_instrument.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_instrument.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectInstrumentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectLearningResourceQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_learning_resource.$get>,
) {
  return ['repository', '/repository/search/type/project_learning_resource', args] as const
}

export function getRepositorySearchTypeProjectLearningResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_learning_resource.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_learning_resource.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectLearningResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_learning_resource.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectLearningResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_learning_resource.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_learning_resource.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeProjectLearningResourceQueryKey>
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
      ...getRepositorySearchTypeProjectLearningResourceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectMeetingQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_meeting.$get>,
) {
  return ['repository', '/repository/search/type/project_meeting', args] as const
}

export function getRepositorySearchTypeProjectMeetingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_meeting.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_meeting.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectMeetingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_meeting.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectMeeting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_meeting.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_meeting.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectMeetingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectOrganizationQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_organization.$get>,
) {
  return ['repository', '/repository/search/type/project_organization', args] as const
}

export function getRepositorySearchTypeProjectOrganizationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_organization.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_organization.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectOrganizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_organization.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_organization.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_organization.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectOrganizationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectProgramQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_program.$get>,
) {
  return ['repository', '/repository/search/type/project_program', args] as const
}

export function getRepositorySearchTypeProjectProgramQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_program.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_program.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectProgramQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_program.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectProgram<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_program.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_program.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectProgramQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectProjectQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_project.$get>,
) {
  return ['repository', '/repository/search/type/project_project', args] as const
}

export function getRepositorySearchTypeProjectProjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_project.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_project.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectProjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_project.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectProject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_project.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_project.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectProjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectServiceQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_service.$get>,
) {
  return ['repository', '/repository/search/type/project_service', args] as const
}

export function getRepositorySearchTypeProjectServiceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_service.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_service.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectServiceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_service.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectService<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_service.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_service.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectServiceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectSiteQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_site.$get>,
) {
  return ['repository', '/repository/search/type/project_site', args] as const
}

export function getRepositorySearchTypeProjectSiteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_site.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_site.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectSiteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_site.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectSite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_site.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_site.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectSiteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectSoftwarepackageQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_softwarepackage.$get>,
) {
  return ['repository', '/repository/search/type/project_softwarepackage', args] as const
}

export function getRepositorySearchTypeProjectSoftwarepackageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_softwarepackage.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_softwarepackage.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectSoftwarepackageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_softwarepackage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectSoftwarepackage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_softwarepackage.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_softwarepackage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectSoftwarepackageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectStandardNameQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_standard_name.$get>,
) {
  return ['repository', '/repository/search/type/project_standard_name', args] as const
}

export function getRepositorySearchTypeProjectStandardNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_standard_name.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_standard_name.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectStandardNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_standard_name.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectStandardName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_standard_name.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_standard_name.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectStandardNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectSurveylocationQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_surveylocation.$get>,
) {
  return ['repository', '/repository/search/type/project_surveylocation', args] as const
}

export function getRepositorySearchTypeProjectSurveylocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_surveylocation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_surveylocation.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectSurveylocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_surveylocation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectSurveylocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_surveylocation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_surveylocation.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectSurveylocationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectTermQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_term.$get>,
) {
  return ['repository', '/repository/search/type/project_term', args] as const
}

export function getRepositorySearchTypeProjectTermQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_term.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_term.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectTermQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_term.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_term.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_term.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectTermQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectVisitQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_visit.$get>,
) {
  return ['repository', '/repository/search/type/project_visit', args] as const
}

export function getRepositorySearchTypeProjectVisitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_visit.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_visit.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectVisitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_visit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectVisit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_visit.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_visit.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectVisitQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeProjectVocabularyQueryKey(
  args: InferRequestType<typeof client.repository.search.type.project_vocabulary.$get>,
) {
  return ['repository', '/repository/search/type/project_vocabulary', args] as const
}

export function getRepositorySearchTypeProjectVocabularyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_vocabulary.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.project_vocabulary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeProjectVocabularyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.project_vocabulary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeProjectVocabulary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.project_vocabulary.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.project_vocabulary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeProjectVocabularyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypePropertySalesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.property_sales.$get>,
) {
  return ['repository', '/repository/search/type/property_sales', args] as const
}

export function getRepositorySearchTypePropertySalesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.property_sales.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.property_sales.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypePropertySalesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.property_sales.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypePropertySales<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.property_sales.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.property_sales.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypePropertySalesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypePropertydbQueryKey(
  args: InferRequestType<typeof client.repository.search.type.propertydb.$get>,
) {
  return ['repository', '/repository/search/type/propertydb', args] as const
}

export function getRepositorySearchTypePropertydbQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.propertydb.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.propertydb.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypePropertydbQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.propertydb.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypePropertydb<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.propertydb.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.propertydb.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypePropertydbQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypePythonNotebookQueryKey(
  args: InferRequestType<typeof client.repository.search.type.python_notebook.$get>,
) {
  return ['repository', '/repository/search/type/python_notebook', args] as const
}

export function getRepositorySearchTypePythonNotebookQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.python_notebook.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.python_notebook.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypePythonNotebookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.python_notebook.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypePythonNotebook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.python_notebook.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.python_notebook.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypePythonNotebookQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeSlackTeamQueryKey(
  args: InferRequestType<typeof client.repository.search.type.slack_team.$get>,
) {
  return ['repository', '/repository/search/type/slack_team', args] as const
}

export function getRepositorySearchTypeSlackTeamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.slack_team.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.slack_team.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeSlackTeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.slack_team.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeSlackTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.slack_team.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.slack_team.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeSlackTeamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeStatusboardQueryKey(
  args: InferRequestType<typeof client.repository.search.type.statusboard.$get>,
) {
  return ['repository', '/repository/search/type/statusboard', args] as const
}

export function getRepositorySearchTypeStatusboardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.statusboard.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.statusboard.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeStatusboardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.statusboard.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeStatusboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.statusboard.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.statusboard.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeStatusboardQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeSunrisesunsetQueryKey(
  args: InferRequestType<typeof client.repository.search.type.sunrisesunset.$get>,
) {
  return ['repository', '/repository/search/type/sunrisesunset', args] as const
}

export function getRepositorySearchTypeSunrisesunsetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.sunrisesunset.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.sunrisesunset.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeSunrisesunsetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.sunrisesunset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeSunrisesunset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.sunrisesunset.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.sunrisesunset.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeSunrisesunsetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTasksQueryKey(
  args: InferRequestType<typeof client.repository.search.type.tasks.$get>,
) {
  return ['repository', '/repository/search/type/tasks', args] as const
}

export function getRepositorySearchTypeTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.tasks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.tasks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTasksQueryKey>
  >({
    queryKey: getRepositorySearchTypeTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.tasks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.tasks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.tasks.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeTasksQueryKey>
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
      ...getRepositorySearchTypeTasksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTmdbmoviesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.tmdbmovies.$get>,
) {
  return ['repository', '/repository/search/type/tmdbmovies', args] as const
}

export function getRepositorySearchTypeTmdbmoviesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.tmdbmovies.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.tmdbmovies.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTmdbmoviesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.tmdbmovies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTmdbmovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.tmdbmovies.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.tmdbmovies.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTmdbmoviesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTodoQueryKey(
  args: InferRequestType<typeof client.repository.search.type.todo.$get>,
) {
  return ['repository', '/repository/search/type/todo', args] as const
}

export function getRepositorySearchTypeTodoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.todo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.todo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.todo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTodoQueryKey>
  >({
    queryKey: getRepositorySearchTypeTodoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.todo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTodo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.todo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.todo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.todo.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeTodoQueryKey>
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
      ...getRepositorySearchTypeTodoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTripEventQueryKey(
  args: InferRequestType<typeof client.repository.search.type.trip_event.$get>,
) {
  return ['repository', '/repository/search/type/trip_event', args] as const
}

export function getRepositorySearchTypeTripEventQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.trip_event.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.trip_event.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTripEventQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.trip_event.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTripEvent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.trip_event.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.trip_event.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTripEventQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTripFlightQueryKey(
  args: InferRequestType<typeof client.repository.search.type.trip_flight.$get>,
) {
  return ['repository', '/repository/search/type/trip_flight', args] as const
}

export function getRepositorySearchTypeTripFlightQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.trip_flight.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.trip_flight.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTripFlightQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.trip_flight.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTripFlight<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.trip_flight.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.trip_flight.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTripFlightQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTripHotelQueryKey(
  args: InferRequestType<typeof client.repository.search.type.trip_hotel.$get>,
) {
  return ['repository', '/repository/search/type/trip_hotel', args] as const
}

export function getRepositorySearchTypeTripHotelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.trip_hotel.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.trip_hotel.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTripHotelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.trip_hotel.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTripHotel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.trip_hotel.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.trip_hotel.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTripHotelQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTripReportQueryKey(
  args: InferRequestType<typeof client.repository.search.type.trip_report.$get>,
) {
  return ['repository', '/repository/search/type/trip_report', args] as const
}

export function getRepositorySearchTypeTripReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.trip_report.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.trip_report.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTripReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.trip_report.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTripReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.trip_report.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.trip_report.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTripReportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTripTripQueryKey(
  args: InferRequestType<typeof client.repository.search.type.trip_trip.$get>,
) {
  return ['repository', '/repository/search/type/trip_trip', args] as const
}

export function getRepositorySearchTypeTripTripQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.trip_trip.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.trip_trip.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTripTripQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.trip_trip.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTripTrip<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.trip_trip.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.trip_trip.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTripTripQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeAwcMetarQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_awc_metar.$get>,
) {
  return ['repository', '/repository/search/type/type_awc_metar', args] as const
}

export function getRepositorySearchTypeTypeAwcMetarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_awc_metar.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_awc_metar.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeAwcMetarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_awc_metar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeAwcMetar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_awc_metar.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_awc_metar.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeAwcMetarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeBizStockseriesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_biz_stockseries.$get>,
) {
  return ['repository', '/repository/search/type/type_biz_stockseries', args] as const
}

export function getRepositorySearchTypeTypeBizStockseriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_biz_stockseries.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_biz_stockseries.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeBizStockseriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_biz_stockseries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeBizStockseries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_biz_stockseries.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_biz_stockseries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeBizStockseriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeBlsSeriesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_bls_series.$get>,
) {
  return ['repository', '/repository/search/type/type_bls_series', args] as const
}

export function getRepositorySearchTypeTypeBlsSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_bls_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_bls_series.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeBlsSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_bls_series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeBlsSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_bls_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_bls_series.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeBlsSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeBlsSurveyQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_bls_survey.$get>,
) {
  return ['repository', '/repository/search/type/type_bls_survey', args] as const
}

export function getRepositorySearchTypeTypeBlsSurveyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_bls_survey.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_bls_survey.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeBlsSurveyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_bls_survey.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeBlsSurvey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_bls_survey.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_bls_survey.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeBlsSurveyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeCensusAcsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_census_acs.$get>,
) {
  return ['repository', '/repository/search/type/type_census_acs', args] as const
}

export function getRepositorySearchTypeTypeCensusAcsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_census_acs.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_census_acs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeCensusAcsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_census_acs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeCensusAcs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_census_acs.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_census_acs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeCensusAcsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeDaymetQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_daymet.$get>,
) {
  return ['repository', '/repository/search/type/type_daymet', args] as const
}

export function getRepositorySearchTypeTypeDaymetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_daymet.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_daymet.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeDaymetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_daymet.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeDaymet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_daymet.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_daymet.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeDaymetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeDbTableQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_db_table.$get>,
) {
  return ['repository', '/repository/search/type/type_db_table', args] as const
}

export function getRepositorySearchTypeTypeDbTableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_db_table.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_db_table.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeDbTableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_db_table.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeDbTable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_db_table.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_db_table.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeDbTableQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeDocumentCsvQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_document_csv.$get>,
) {
  return ['repository', '/repository/search/type/type_document_csv', args] as const
}

export function getRepositorySearchTypeTypeDocumentCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_csv.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_document_csv.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeDocumentCsvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_document_csv.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeDocumentCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_csv.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_document_csv.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeDocumentCsvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeDocumentDocQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_document_doc.$get>,
) {
  return ['repository', '/repository/search/type/type_document_doc', args] as const
}

export function getRepositorySearchTypeTypeDocumentDocQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_doc.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_document_doc.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeDocumentDocQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_document_doc.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeDocumentDoc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_doc.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_document_doc.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeDocumentDocQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeDocumentHtmlQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_document_html.$get>,
) {
  return ['repository', '/repository/search/type/type_document_html', args] as const
}

export function getRepositorySearchTypeTypeDocumentHtmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_html.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_document_html.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeDocumentHtmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_document_html.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeDocumentHtml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_html.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_document_html.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeDocumentHtmlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeDocumentPdfQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_document_pdf.$get>,
) {
  return ['repository', '/repository/search/type/type_document_pdf', args] as const
}

export function getRepositorySearchTypeTypeDocumentPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_pdf.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_document_pdf.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeDocumentPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_document_pdf.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeDocumentPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_pdf.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_document_pdf.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeDocumentPdfQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeDocumentPptQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_document_ppt.$get>,
) {
  return ['repository', '/repository/search/type/type_document_ppt', args] as const
}

export function getRepositorySearchTypeTypeDocumentPptQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_ppt.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_document_ppt.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeDocumentPptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_document_ppt.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeDocumentPpt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_ppt.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_document_ppt.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeDocumentPptQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeDocumentXlsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_document_xls.$get>,
) {
  return ['repository', '/repository/search/type/type_document_xls', args] as const
}

export function getRepositorySearchTypeTypeDocumentXlsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_xls.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_document_xls.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeDocumentXlsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_document_xls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeDocumentXls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_document_xls.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_document_xls.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeDocumentXlsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeDrilsdownCasestudyQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>,
) {
  return ['repository', '/repository/search/type/type_drilsdown_casestudy', args] as const
}

export function getRepositorySearchTypeTypeDrilsdownCasestudyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeDrilsdownCasestudyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_drilsdown_casestudy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeDrilsdownCasestudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypeDrilsdownCasestudyQueryKey>
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
      ...getRepositorySearchTypeTypeDrilsdownCasestudyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeEdgarFilingQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_edgar_filing.$get>,
) {
  return ['repository', '/repository/search/type/type_edgar_filing', args] as const
}

export function getRepositorySearchTypeTypeEdgarFilingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_edgar_filing.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_edgar_filing.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeEdgarFilingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_edgar_filing.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeEdgarFiling<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_edgar_filing.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_edgar_filing.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeEdgarFilingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeEiaCategoryQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_eia_category.$get>,
) {
  return ['repository', '/repository/search/type/type_eia_category', args] as const
}

export function getRepositorySearchTypeTypeEiaCategoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_eia_category.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_eia_category.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeEiaCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_eia_category.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeEiaCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_eia_category.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_eia_category.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeEiaCategoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeEiaSeriesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_eia_series.$get>,
) {
  return ['repository', '/repository/search/type/type_eia_series', args] as const
}

export function getRepositorySearchTypeTypeEiaSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_eia_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_eia_series.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeEiaSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_eia_series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeEiaSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_eia_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_eia_series.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeEiaSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeEsriFeatureserverQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_featureserver.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_featureserver', args] as const
}

export function getRepositorySearchTypeTypeEsriFeatureserverQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_featureserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_featureserver.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeEsriFeatureserverQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_esri_featureserver.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeEsriFeatureserver<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_featureserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_esri_featureserver.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeEsriFeatureserverQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeEsriGeometryserverQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_geometryserver.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_geometryserver', args] as const
}

export function getRepositorySearchTypeTypeEsriGeometryserverQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_geometryserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_geometryserver.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeEsriGeometryserverQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_esri_geometryserver.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeEsriGeometryserver<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_geometryserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_esri_geometryserver.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypeEsriGeometryserverQueryKey>
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
      ...getRepositorySearchTypeTypeEsriGeometryserverQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeEsriGpserverQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_gpserver.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_gpserver', args] as const
}

export function getRepositorySearchTypeTypeEsriGpserverQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_gpserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_gpserver.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeEsriGpserverQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_esri_gpserver.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeEsriGpserver<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_gpserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_esri_gpserver.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeEsriGpserverQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeEsriImageserverQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_imageserver.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_imageserver', args] as const
}

export function getRepositorySearchTypeTypeEsriImageserverQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_imageserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_imageserver.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeEsriImageserverQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_esri_imageserver.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeEsriImageserver<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_imageserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_esri_imageserver.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeEsriImageserverQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeEsriLayerQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_layer.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_layer', args] as const
}

export function getRepositorySearchTypeTypeEsriLayerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_layer.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_layer.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeEsriLayerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_esri_layer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeEsriLayer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_layer.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_esri_layer.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeEsriLayerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeEsriMapserverQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_mapserver.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_mapserver', args] as const
}

export function getRepositorySearchTypeTypeEsriMapserverQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_mapserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_mapserver.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeEsriMapserverQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_esri_mapserver.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeEsriMapserver<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_mapserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_esri_mapserver.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeEsriMapserverQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeEsriRestfolderQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restfolder.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_restfolder', args] as const
}

export function getRepositorySearchTypeTypeEsriRestfolderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_restfolder.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restfolder.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeEsriRestfolderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_esri_restfolder.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeEsriRestfolder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_restfolder.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_esri_restfolder.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeEsriRestfolderQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeEsriRestserverQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restserver.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_restserver', args] as const
}

export function getRepositorySearchTypeTypeEsriRestserverQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_restserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restserver.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeEsriRestserverQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_esri_restserver.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeEsriRestserver<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_restserver.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_esri_restserver.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeEsriRestserverQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeEsriRestserviceQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restservice.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_restservice', args] as const
}

export function getRepositorySearchTypeTypeEsriRestserviceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_restservice.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restservice.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeEsriRestserviceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_esri_restservice.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeEsriRestservice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_esri_restservice.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_esri_restservice.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeEsriRestserviceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeExtremesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_extremes.$get>,
) {
  return ['repository', '/repository/search/type/type_extremes', args] as const
}

export function getRepositorySearchTypeTypeExtremesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_extremes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_extremes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeExtremesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_extremes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeExtremes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_extremes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_extremes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeExtremesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeFredCategoryQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_fred_category.$get>,
) {
  return ['repository', '/repository/search/type/type_fred_category', args] as const
}

export function getRepositorySearchTypeTypeFredCategoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_fred_category.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_fred_category.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeFredCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_fred_category.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeFredCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_fred_category.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_fred_category.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeFredCategoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeFredSeriesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_fred_series.$get>,
) {
  return ['repository', '/repository/search/type/type_fred_series', args] as const
}

export function getRepositorySearchTypeTypeFredSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_fred_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_fred_series.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeFredSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_fred_series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeFredSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_fred_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_fred_series.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeFredSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeGtfsAgencyQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_agency.$get>,
) {
  return ['repository', '/repository/search/type/type_gtfs_agency', args] as const
}

export function getRepositorySearchTypeTypeGtfsAgencyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_agency.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_agency.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeGtfsAgencyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_gtfs_agency.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeGtfsAgency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_agency.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_gtfs_agency.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeGtfsAgencyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeGtfsRouteQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_route.$get>,
) {
  return ['repository', '/repository/search/type/type_gtfs_route', args] as const
}

export function getRepositorySearchTypeTypeGtfsRouteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_route.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_route.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeGtfsRouteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_gtfs_route.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeGtfsRoute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_route.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_gtfs_route.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeGtfsRouteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeGtfsRoutesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_routes.$get>,
) {
  return ['repository', '/repository/search/type/type_gtfs_routes', args] as const
}

export function getRepositorySearchTypeTypeGtfsRoutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_routes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_routes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeGtfsRoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_gtfs_routes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeGtfsRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_routes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_gtfs_routes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeGtfsRoutesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeGtfsStopQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_stop.$get>,
) {
  return ['repository', '/repository/search/type/type_gtfs_stop', args] as const
}

export function getRepositorySearchTypeTypeGtfsStopQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stop.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_stop.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeGtfsStopQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_gtfs_stop.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeGtfsStop<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stop.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_gtfs_stop.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeGtfsStopQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeGtfsStopsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_stops.$get>,
) {
  return ['repository', '/repository/search/type/type_gtfs_stops', args] as const
}

export function getRepositorySearchTypeTypeGtfsStopsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stops.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_stops.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeGtfsStopsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_gtfs_stops.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeGtfsStops<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stops.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_gtfs_stops.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeGtfsStopsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeGtfsTripQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_trip.$get>,
) {
  return ['repository', '/repository/search/type/type_gtfs_trip', args] as const
}

export function getRepositorySearchTypeTypeGtfsTripQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_trip.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_trip.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeGtfsTripQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_gtfs_trip.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeGtfsTrip<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_trip.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_gtfs_trip.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeGtfsTripQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeHazarddataQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_hazarddata.$get>,
) {
  return ['repository', '/repository/search/type/type_hazarddata', args] as const
}

export function getRepositorySearchTypeTypeHazarddataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_hazarddata.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_hazarddata.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeHazarddataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_hazarddata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeHazarddata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_hazarddata.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_hazarddata.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeHazarddataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeHydroColoradoQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_hydro_colorado.$get>,
) {
  return ['repository', '/repository/search/type/type_hydro_colorado', args] as const
}

export function getRepositorySearchTypeTypeHydroColoradoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_hydro_colorado.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_hydro_colorado.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeHydroColoradoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_hydro_colorado.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeHydroColorado<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_hydro_colorado.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_hydro_colorado.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeHydroColoradoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeIdvBundleQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_idv_bundle.$get>,
) {
  return ['repository', '/repository/search/type/type_idv_bundle', args] as const
}

export function getRepositorySearchTypeTypeIdvBundleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_idv_bundle.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_idv_bundle.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeIdvBundleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_idv_bundle.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeIdvBundle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_idv_bundle.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_idv_bundle.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeIdvBundleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeImageQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_image.$get>,
) {
  return ['repository', '/repository/search/type/type_image', args] as const
}

export function getRepositorySearchTypeTypeImageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_image.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_image.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeImageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_image.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_image.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_image.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeImageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeImageAirportQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_image_airport.$get>,
) {
  return ['repository', '/repository/search/type/type_image_airport', args] as const
}

export function getRepositorySearchTypeTypeImageAirportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_image_airport.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_image_airport.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeImageAirportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_image_airport.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeImageAirport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_image_airport.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_image_airport.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeImageAirportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeImageWebcamQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_image_webcam.$get>,
) {
  return ['repository', '/repository/search/type/type_image_webcam', args] as const
}

export function getRepositorySearchTypeTypeImageWebcamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_image_webcam.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_image_webcam.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeImageWebcamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_image_webcam.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeImageWebcam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_image_webcam.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_image_webcam.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeImageWebcamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeMbQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_mb.$get>,
) {
  return ['repository', '/repository/search/type/type_mb', args] as const
}

export function getRepositorySearchTypeTypeMbQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.type_mb.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_mb.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.type_mb.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeTypeMbQueryKey>
  >({
    queryKey: getRepositorySearchTypeTypeMbQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_mb.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeMb<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.type_mb.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_mb.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.type_mb.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeTypeMbQueryKey>
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
      ...getRepositorySearchTypeTypeMbQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeMbCollectionQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_mb_collection.$get>,
) {
  return ['repository', '/repository/search/type/type_mb_collection', args] as const
}

export function getRepositorySearchTypeTypeMbCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_mb_collection.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_mb_collection.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeMbCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_mb_collection.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeMbCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_mb_collection.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_mb_collection.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeMbCollectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeMbPointBasicQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_mb_point_basic.$get>,
) {
  return ['repository', '/repository/search/type/type_mb_point_basic', args] as const
}

export function getRepositorySearchTypeTypeMbPointBasicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_mb_point_basic.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_mb_point_basic.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeMbPointBasicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_mb_point_basic.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeMbPointBasic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_mb_point_basic.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_mb_point_basic.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeMbPointBasicQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeMetametaDictionaryQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_metameta_dictionary.$get>,
) {
  return ['repository', '/repository/search/type/type_metameta_dictionary', args] as const
}

export function getRepositorySearchTypeTypeMetametaDictionaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_metameta_dictionary.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_metameta_dictionary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeMetametaDictionaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_metameta_dictionary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeMetametaDictionary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_metameta_dictionary.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_metameta_dictionary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypeMetametaDictionaryQueryKey>
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
      ...getRepositorySearchTypeTypeMetametaDictionaryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeMetametaFieldQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_metameta_field.$get>,
) {
  return ['repository', '/repository/search/type/type_metameta_field', args] as const
}

export function getRepositorySearchTypeTypeMetametaFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_metameta_field.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_metameta_field.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeMetametaFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_metameta_field.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeMetametaField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_metameta_field.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_metameta_field.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeMetametaFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeNasaamesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_nasaames.$get>,
) {
  return ['repository', '/repository/search/type/type_nasaames', args] as const
}

export function getRepositorySearchTypeTypeNasaamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_nasaames.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_nasaames.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeNasaamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_nasaames.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeNasaames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_nasaames.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_nasaames.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeNasaamesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeNcssQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_ncss.$get>,
) {
  return ['repository', '/repository/search/type/type_ncss', args] as const
}

export function getRepositorySearchTypeTypeNcssQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.type_ncss.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_ncss.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeNcssQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_ncss.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeNcss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.type_ncss.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_ncss.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeNcssQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeNitfQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_nitf.$get>,
) {
  return ['repository', '/repository/search/type/type_nitf', args] as const
}

export function getRepositorySearchTypeTypeNitfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.type_nitf.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_nitf.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeNitfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_nitf.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeNitf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.type_nitf.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_nitf.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeNitfQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointAmerifluxLevel2QueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ameriflux_level2', args] as const
}

export function getRepositorySearchTypeTypePointAmerifluxLevel2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointAmerifluxLevel2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_ameriflux_level2.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointAmerifluxLevel2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_ameriflux_level2.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypePointAmerifluxLevel2QueryKey>
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
      ...getRepositorySearchTypeTypePointAmerifluxLevel2QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointAmrcFinalQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_amrc_final.$get>,
) {
  return ['repository', '/repository/search/type/type_point_amrc_final', args] as const
}

export function getRepositorySearchTypeTypePointAmrcFinalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_final.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_amrc_final.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointAmrcFinalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_amrc_final.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointAmrcFinal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_final.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_amrc_final.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointAmrcFinalQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointAmrcFreewaveQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_amrc_freewave.$get>,
) {
  return ['repository', '/repository/search/type/type_point_amrc_freewave', args] as const
}

export function getRepositorySearchTypeTypePointAmrcFreewaveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_freewave.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_amrc_freewave.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointAmrcFreewaveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_amrc_freewave.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointAmrcFreewave<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_freewave.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_amrc_freewave.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypePointAmrcFreewaveQueryKey>
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
      ...getRepositorySearchTypeTypePointAmrcFreewaveQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointCzoQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_czo.$get>,
) {
  return ['repository', '/repository/search/type/type_point_czo', args] as const
}

export function getRepositorySearchTypeTypePointCzoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_czo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_czo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointCzoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_czo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointCzo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_czo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_czo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointCzoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointGcnetQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_gcnet.$get>,
) {
  return ['repository', '/repository/search/type/type_point_gcnet', args] as const
}

export function getRepositorySearchTypeTypePointGcnetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_gcnet.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_gcnet.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointGcnetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_gcnet.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointGcnet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_gcnet.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_gcnet.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointGcnetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointGeomagIaga2002QueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>,
) {
  return ['repository', '/repository/search/type/type_point_geomag_iaga2002', args] as const
}

export function getRepositorySearchTypeTypePointGeomagIaga2002QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointGeomagIaga2002QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_geomag_iaga2002.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointGeomagIaga2002<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_geomag_iaga2002.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypePointGeomagIaga2002QueryKey>
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
      ...getRepositorySearchTypeTypePointGeomagIaga2002QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointHydroWatermlQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_hydro_waterml.$get>,
) {
  return ['repository', '/repository/search/type/type_point_hydro_waterml', args] as const
}

export function getRepositorySearchTypeTypePointHydroWatermlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_hydro_waterml.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_hydro_waterml.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointHydroWatermlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_hydro_waterml.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointHydroWaterml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_hydro_waterml.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_hydro_waterml.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypePointHydroWatermlQueryKey>
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
      ...getRepositorySearchTypeTypePointHydroWatermlQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointIcebridgeAtmIcessnQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>,
) {
  return ['repository', '/repository/search/type/type_point_icebridge_atm_icessn', args] as const
}

export function getRepositorySearchTypeTypePointIcebridgeAtmIcessnQueryOptions<
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
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointIcebridgeAtmIcessnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_icebridge_atm_icessn.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointIcebridgeAtmIcessn<
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
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypePointIcebridgeAtmIcessnQueryKey>
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
      ...getRepositorySearchTypeTypePointIcebridgeAtmIcessnQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointIcebridgeAtmQfitQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>,
) {
  return ['repository', '/repository/search/type/type_point_icebridge_atm_qfit', args] as const
}

export function getRepositorySearchTypeTypePointIcebridgeAtmQfitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointIcebridgeAtmQfitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_icebridge_atm_qfit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointIcebridgeAtmQfit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointIcebridgeAtmQfitQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2QueryKey(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_icebridge_mccords_irmcr2',
    args,
  ] as const
}

export function getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2QueryOptions<
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
  args: InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2<
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
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3QueryKey(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_icebridge_mccords_irmcr3',
    args,
  ] as const
}

export function getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3QueryOptions<
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
  args: InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3<
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
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointIcebridgeParisQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_paris.$get>,
) {
  return ['repository', '/repository/search/type/type_point_icebridge_paris', args] as const
}

export function getRepositorySearchTypeTypePointIcebridgeParisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_icebridge_paris.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_paris.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointIcebridgeParisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_icebridge_paris.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointIcebridgeParis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_icebridge_paris.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_paris.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypePointIcebridgeParisQueryKey>
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
      ...getRepositorySearchTypeTypePointIcebridgeParisQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointIdvQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_idv.$get>,
) {
  return ['repository', '/repository/search/type/type_point_idv', args] as const
}

export function getRepositorySearchTypeTypePointIdvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_idv.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_idv.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointIdvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_idv.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointIdv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_idv.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_idv.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointIdvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointInlineQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_inline.$get>,
) {
  return ['repository', '/repository/search/type/type_point_inline', args] as const
}

export function getRepositorySearchTypeTypePointInlineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_inline.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_inline.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointInlineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_inline.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointInline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_inline.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_inline.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointInlineQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointNcdcClimateQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ncdc_climate.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ncdc_climate', args] as const
}

export function getRepositorySearchTypeTypePointNcdcClimateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ncdc_climate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ncdc_climate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointNcdcClimateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_ncdc_climate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointNcdcClimate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ncdc_climate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_ncdc_climate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointNcdcClimateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointNetcdfQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_netcdf.$get>,
) {
  return ['repository', '/repository/search/type/type_point_netcdf', args] as const
}

export function getRepositorySearchTypeTypePointNetcdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_netcdf.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_netcdf.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointNetcdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_netcdf.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointNetcdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_netcdf.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_netcdf.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointNetcdfQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointNoaaCarbonQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_carbon.$get>,
) {
  return ['repository', '/repository/search/type/type_point_noaa_carbon', args] as const
}

export function getRepositorySearchTypeTypePointNoaaCarbonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_carbon.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_carbon.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointNoaaCarbonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_noaa_carbon.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointNoaaCarbon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_carbon.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_noaa_carbon.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointNoaaCarbonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointNoaaFlaskEventQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>,
) {
  return ['repository', '/repository/search/type/type_point_noaa_flask_event', args] as const
}

export function getRepositorySearchTypeTypePointNoaaFlaskEventQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointNoaaFlaskEventQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_noaa_flask_event.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointNoaaFlaskEvent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_noaa_flask_event.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypePointNoaaFlaskEventQueryKey>
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
      ...getRepositorySearchTypeTypePointNoaaFlaskEventQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointNoaaFlaskMonthQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>,
) {
  return ['repository', '/repository/search/type/type_point_noaa_flask_month', args] as const
}

export function getRepositorySearchTypeTypePointNoaaFlaskMonthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointNoaaFlaskMonthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_noaa_flask_month.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointNoaaFlaskMonth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_noaa_flask_month.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypePointNoaaFlaskMonthQueryKey>
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
      ...getRepositorySearchTypeTypePointNoaaFlaskMonthQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointNoaaMadisQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_madis.$get>,
) {
  return ['repository', '/repository/search/type/type_point_noaa_madis', args] as const
}

export function getRepositorySearchTypeTypePointNoaaMadisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_madis.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_madis.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointNoaaMadisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_noaa_madis.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointNoaaMadis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_madis.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_noaa_madis.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointNoaaMadisQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointNoaaTowerQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_tower.$get>,
) {
  return ['repository', '/repository/search/type/type_point_noaa_tower', args] as const
}

export function getRepositorySearchTypeTypePointNoaaTowerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_tower.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_tower.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointNoaaTowerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_noaa_tower.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointNoaaTower<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_tower.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_noaa_tower.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointNoaaTowerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointOceanCnvQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_cnv.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ocean_cnv', args] as const
}

export function getRepositorySearchTypeTypePointOceanCnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_cnv.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_cnv.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointOceanCnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_ocean_cnv.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointOceanCnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_cnv.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_ocean_cnv.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointOceanCnvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointOceanCsvSadoTTSQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ocean_csv_sado_TTS', args] as const
}

export function getRepositorySearchTypeTypePointOceanCsvSadoTTSQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointOceanCsvSadoTTSQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_ocean_csv_sado_TTS.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointOceanCsvSadoTTS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointOceanCsvSadoTTSQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointOceanCsvSadoMeteoQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ocean_csv_sado_meteo', args] as const
}

export function getRepositorySearchTypeTypePointOceanCsvSadoMeteoQueryOptions<
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
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointOceanCsvSadoMeteoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_ocean_csv_sado_meteo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointOceanCsvSadoMeteo<
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
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypePointOceanCsvSadoMeteoQueryKey>
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
      ...getRepositorySearchTypeTypePointOceanCsvSadoMeteoQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointOceanCsvSadoPositionQueryKey(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get
  >,
) {
  return ['repository', '/repository/search/type/type_point_ocean_csv_sado_position', args] as const
}

export function getRepositorySearchTypeTypePointOceanCsvSadoPositionQueryOptions<
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
  args: InferRequestType<
    typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointOceanCsvSadoPositionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_ocean_csv_sado_position.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointOceanCsvSadoPosition<
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
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypePointOceanCsvSadoPositionQueryKey>
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
      ...getRepositorySearchTypeTypePointOceanCsvSadoPositionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointOceanNetcdfGliderQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ocean_netcdf_glider', args] as const
}

export function getRepositorySearchTypeTypePointOceanNetcdfGliderQueryOptions<
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
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointOceanNetcdfGliderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_ocean_netcdf_glider.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointOceanNetcdfGlider<
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
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointOceanNetcdfGliderQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointOceanNetcdfTrackQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ocean_netcdf_track', args] as const
}

export function getRepositorySearchTypeTypePointOceanNetcdfTrackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointOceanNetcdfTrackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_ocean_netcdf_track.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointOceanNetcdfTrack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_ocean_netcdf_track.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointOceanNetcdfTrackQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointOceanOoiDmgxQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ocean_ooi_dmgx', args] as const
}

export function getRepositorySearchTypeTypePointOceanOoiDmgxQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointOceanOoiDmgxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_ocean_ooi_dmgx.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointOceanOoiDmgx<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypePointOceanOoiDmgxQueryKey>
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
      ...getRepositorySearchTypeTypePointOceanOoiDmgxQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointOpenaqQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_openaq.$get>,
) {
  return ['repository', '/repository/search/type/type_point_openaq', args] as const
}

export function getRepositorySearchTypeTypePointOpenaqQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_openaq.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_openaq.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointOpenaqQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_openaq.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointOpenaq<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_openaq.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_openaq.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointOpenaqQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointPboPositionTimeSeriesQueryKey(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_pbo_position_time_series.$get
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_pbo_position_time_series',
    args,
  ] as const
}

export function getRepositorySearchTypeTypePointPboPositionTimeSeriesQueryOptions<
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
  args: InferRequestType<
    typeof client.repository.search.type.type_point_pbo_position_time_series.$get
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointPboPositionTimeSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_pbo_position_time_series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointPboPositionTimeSeries<
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
  args: () => InferRequestType<
    typeof client.repository.search.type.type_point_pbo_position_time_series.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointPboPositionTimeSeriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointSimpleRecordsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_simple_records.$get>,
) {
  return ['repository', '/repository/search/type/type_point_simple_records', args] as const
}

export function getRepositorySearchTypeTypePointSimpleRecordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_simple_records.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_simple_records.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointSimpleRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_simple_records.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointSimpleRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_simple_records.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_simple_records.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRepositorySearchTypeTypePointSimpleRecordsQueryKey>
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
      ...getRepositorySearchTypeTypePointSimpleRecordsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointSnotelQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_snotel.$get>,
) {
  return ['repository', '/repository/search/type/type_point_snotel', args] as const
}

export function getRepositorySearchTypeTypePointSnotelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_snotel.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_snotel.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointSnotelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_snotel.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointSnotel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_snotel.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_snotel.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointSnotelQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointTextQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_text.$get>,
) {
  return ['repository', '/repository/search/type/type_point_text', args] as const
}

export function getRepositorySearchTypeTypePointTextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_text.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_text.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointTextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_text.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_text.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_text.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointTextQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePointWsbbGgpQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>,
) {
  return ['repository', '/repository/search/type/type_point_wsbb_ggp', args] as const
}

export function getRepositorySearchTypeTypePointWsbbGgpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePointWsbbGgpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_point_wsbb_ggp.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePointWsbbGgp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePointWsbbGgpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypePsdMonthlyClimateIndexQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>,
) {
  return ['repository', '/repository/search/type/type_psd_monthly_climate_index', args] as const
}

export function getRepositorySearchTypeTypePsdMonthlyClimateIndexQueryOptions<
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
  args: InferRequestType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypePsdMonthlyClimateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_psd_monthly_climate_index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypePsdMonthlyClimateIndex<
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
  args: () => InferRequestType<
    typeof client.repository.search.type.type_psd_monthly_climate_index.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypePsdMonthlyClimateIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeQuandlSeriesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_quandl_series.$get>,
) {
  return ['repository', '/repository/search/type/type_quandl_series', args] as const
}

export function getRepositorySearchTypeTypeQuandlSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_quandl_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_quandl_series.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeQuandlSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_quandl_series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeQuandlSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_quandl_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_quandl_series.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeQuandlSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeServiceGroupQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_service_group.$get>,
) {
  return ['repository', '/repository/search/type/type_service_group', args] as const
}

export function getRepositorySearchTypeTypeServiceGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_service_group.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_service_group.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeServiceGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_service_group.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeServiceGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_service_group.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_service_group.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeServiceGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeServiceLinkQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_service_link.$get>,
) {
  return ['repository', '/repository/search/type/type_service_link', args] as const
}

export function getRepositorySearchTypeTypeServiceLinkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_service_link.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_service_link.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeServiceLinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_service_link.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeServiceLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_service_link.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_service_link.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeServiceLinkQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeSocrataSeriesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_socrata_series.$get>,
) {
  return ['repository', '/repository/search/type/type_socrata_series', args] as const
}

export function getRepositorySearchTypeTypeSocrataSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_socrata_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_socrata_series.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeSocrataSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_socrata_series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeSocrataSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_socrata_series.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_socrata_series.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeSocrataSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeSoundingCodQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_cod.$get>,
) {
  return ['repository', '/repository/search/type/type_sounding_cod', args] as const
}

export function getRepositorySearchTypeTypeSoundingCodQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_sounding_cod.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_cod.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeSoundingCodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_sounding_cod.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeSoundingCod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_sounding_cod.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_sounding_cod.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeSoundingCodQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeSoundingFrdQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_frd.$get>,
) {
  return ['repository', '/repository/search/type/type_sounding_frd', args] as const
}

export function getRepositorySearchTypeTypeSoundingFrdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_sounding_frd.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_frd.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeSoundingFrdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_sounding_frd.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeSoundingFrd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_sounding_frd.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_sounding_frd.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeSoundingFrdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeSoundingGsdQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_gsd.$get>,
) {
  return ['repository', '/repository/search/type/type_sounding_gsd', args] as const
}

export function getRepositorySearchTypeTypeSoundingGsdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_sounding_gsd.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_gsd.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeSoundingGsdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_sounding_gsd.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeSoundingGsd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_sounding_gsd.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_sounding_gsd.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeSoundingGsdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeSoundingWyomingQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_wyoming.$get>,
) {
  return ['repository', '/repository/search/type/type_sounding_wyoming', args] as const
}

export function getRepositorySearchTypeTypeSoundingWyomingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_sounding_wyoming.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_wyoming.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeSoundingWyomingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_sounding_wyoming.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeSoundingWyoming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_sounding_wyoming.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_sounding_wyoming.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeSoundingWyomingQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeTmyQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_tmy.$get>,
) {
  return ['repository', '/repository/search/type/type_tmy', args] as const
}

export function getRepositorySearchTypeTypeTmyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.type_tmy.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_tmy.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeTmyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_tmy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeTmy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.type_tmy.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_tmy.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeTmyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeTweetQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_tweet.$get>,
) {
  return ['repository', '/repository/search/type/type_tweet', args] as const
}

export function getRepositorySearchTypeTypeTweetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_tweet.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_tweet.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeTweetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_tweet.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeTweet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_tweet.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_tweet.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeTweetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeUsgsGaugeQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_usgs_gauge.$get>,
) {
  return ['repository', '/repository/search/type/type_usgs_gauge', args] as const
}

export function getRepositorySearchTypeTypeUsgsGaugeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_usgs_gauge.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_usgs_gauge.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeUsgsGaugeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_usgs_gauge.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeUsgsGauge<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_usgs_gauge.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_usgs_gauge.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeUsgsGaugeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeVirtualQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_virtual.$get>,
) {
  return ['repository', '/repository/search/type/type_virtual', args] as const
}

export function getRepositorySearchTypeTypeVirtualQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_virtual.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_virtual.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeVirtualQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_virtual.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeVirtual<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_virtual.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_virtual.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeVirtualQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeWmsCapabilitiesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_wms_capabilities.$get>,
) {
  return ['repository', '/repository/search/type/type_wms_capabilities', args] as const
}

export function getRepositorySearchTypeTypeWmsCapabilitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_wms_capabilities.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_wms_capabilities.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeWmsCapabilitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_wms_capabilities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeWmsCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_wms_capabilities.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_wms_capabilities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeWmsCapabilitiesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeTypeWmsLayerQueryKey(
  args: InferRequestType<typeof client.repository.search.type.type_wms_layer.$get>,
) {
  return ['repository', '/repository/search/type/type_wms_layer', args] as const
}

export function getRepositorySearchTypeTypeWmsLayerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_wms_layer.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.type_wms_layer.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeTypeWmsLayerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.type_wms_layer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeTypeWmsLayer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.type_wms_layer.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.type_wms_layer.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeTypeWmsLayerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeUfoSightingsQueryKey(
  args: InferRequestType<typeof client.repository.search.type.ufo_sightings.$get>,
) {
  return ['repository', '/repository/search/type/ufo_sightings', args] as const
}

export function getRepositorySearchTypeUfoSightingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.ufo_sightings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.ufo_sightings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeUfoSightingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.ufo_sightings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeUfoSightings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.ufo_sightings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.ufo_sightings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeUfoSightingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeUsPlacesQueryKey(
  args: InferRequestType<typeof client.repository.search.type.us_places.$get>,
) {
  return ['repository', '/repository/search/type/us_places', args] as const
}

export function getRepositorySearchTypeUsPlacesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.us_places.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.us_places.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeUsPlacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.us_places.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeUsPlaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.us_places.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.us_places.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeUsPlacesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeVoteYesnoQueryKey(
  args: InferRequestType<typeof client.repository.search.type.vote_yesno.$get>,
) {
  return ['repository', '/repository/search/type/vote_yesno', args] as const
}

export function getRepositorySearchTypeVoteYesnoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.vote_yesno.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.vote_yesno.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeVoteYesnoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.vote_yesno.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeVoteYesno<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.repository.search.type.vote_yesno.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.vote_yesno.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeVoteYesnoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeWeblogQueryKey(
  args: InferRequestType<typeof client.repository.search.type.weblog.$get>,
) {
  return ['repository', '/repository/search/type/weblog', args] as const
}

export function getRepositorySearchTypeWeblogQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.weblog.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.weblog.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.weblog.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositorySearchTypeWeblogQueryKey>
  >({
    queryKey: getRepositorySearchTypeWeblogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.weblog.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeWeblog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.weblog.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.weblog.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.repository.search.type.weblog.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepositorySearchTypeWeblogQueryKey>
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
      ...getRepositorySearchTypeWeblogQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositorySearchTypeWikipageQueryKey(
  args: InferRequestType<typeof client.repository.search.type.wikipage.$get>,
) {
  return ['repository', '/repository/search/type/wikipage', args] as const
}

export function getRepositorySearchTypeWikipageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.wikipage.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.repository.search.type.wikipage.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositorySearchTypeWikipageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repository.search.type.wikipage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositorySearchTypeWikipage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.wikipage.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.repository.search.type.wikipage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRepositorySearchTypeWikipageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
