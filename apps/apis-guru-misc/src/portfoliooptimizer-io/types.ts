declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/assets/analysis/absorption-ratio': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            assetsCovarianceMatrixEigenvectors?:
              | { eigenvectorsRetained?: number | undefined }
              | undefined
          }
        }
        output: { assetsAbsorptionRatio: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/analysis/turbulence-index': {
      $post: {
        input: {
          json: {
            assets: number
            assetsAverageReturns: number[]
            assetsCovarianceMatrix: number[][]
            assetsReturns: number[]
          }
        }
        output: { assetsTurbulenceIndex: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/correlation/matrix': {
      $post: {
        input: {
          json:
            | { assets: { assetReturns: number[] }[] }
            | { assets: number; assetsCovarianceMatrix: number[][] }
        }
        output: { assetsCorrelationMatrix: number[][] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/correlation/matrix/bounds': {
      $post: {
        input: {
          json: { assets: number; assetsCorrelationMatrix: number[][]; assetsGroup: number[] }
        }
        output: {
          assetsCorrelationMatrixLowerBounds: number[][]
          assetsCorrelationMatrixUpperBounds: number[][]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/correlation/matrix/denoised': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCorrelationMatrix: number[][]
            assetsCorrelationMatrixAspectRatio: number
            denoisingMethod?: 'eigenvaluesClipping' | undefined
          }
        }
        output: { assetsCorrelationMatrix: number[][] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/correlation/matrix/distance': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCorrelationMatrix: number[][]
            distanceMetric?: 'euclidean' | 'correlationMatrix' | 'bures' | undefined
            referenceCorrelationMatrix: number[][]
          }
        }
        output: { assetsCorrelationMatrixDistance: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/correlation/matrix/effective-rank': {
      $post: {
        input: { json: { assets: number; assetsCorrelationMatrix: number[][] } }
        output: { assetsCorrelationMatrixEffectiveRank: number[][] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/correlation/matrix/informativeness': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCorrelationMatrix: number[][]
            distanceMetric?: 'euclidean' | 'correlationMatrix' | 'bures' | undefined
          }
        }
        output: { assetsCorrelationMatrixInformativeness: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/correlation/matrix/nearest': {
      $post: {
        input: {
          json: {
            assets: number
            assetsApproximateCorrelationMatrix: number[][]
            assetsFixedCorrelations?: number[][] | undefined
          }
        }
        output: { assetsCorrelationMatrix: number[][] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/correlation/matrix/random': {
      $post: {
        input: { json: { assets: number } }
        output: { assetsCorrelationMatrix: number[][] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/correlation/matrix/shrinkage': {
      $post: {
        input: {
          json:
            | {
                assets: number
                assetsCorrelationMatrix: number[][]
                shrinkageFactor: number
                targetEquicorrelationMatrix:
                  | 'minimumEquicorrelationMatrix'
                  | 'zeroEquicorrelationMatrix'
                  | 'maximumEquicorrelationMatrix'
              }
            | {
                assets: number
                assetsCorrelationMatrix: number[][]
                shrinkageFactor: number
                targetCorrelationMatrix: number[][]
              }
        }
        output: { assetsCorrelationMatrix: number[][] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/correlation/matrix/theory-implied': {
      $post: {
        input: {
          json: {
            assets: { assetHierarchicalClassification: (string | number)[] }[]
            assetsCorrelationMatrix: number[][]
            clusteringMethod?:
              | 'singleLinkage'
              | 'averageLinkage'
              | 'completeLinkage'
              | 'wardLinkage'
              | undefined
          }
        }
        output: { assetsCorrelationMatrix: number[][] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/correlation/matrix/validation': {
      $post: {
        input: { json: { assets: number; assetsCorrelationMatrix: number[][] } }
        output: {
          message:
            | 'valid correlation matrix'
            | 'invalid correlation matrix - non symmetric matrix'
            | 'invalid correlation matrix - non positive diagonal elements'
            | 'invalid correlation matrix - non positive semi-definite matrix'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/covariance/matrix': {
      $post: {
        input: {
          json:
            | { assets: { assetReturns: number[] }[] }
            | { assets: number; assetsCorrelationMatrix: number[][]; assetsVariances: number[] }
            | { assets: number; assetsCorrelationMatrix: number[][]; assetsVolatilities: number[] }
        }
        output: { assetsCovarianceMatrix: number[][] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/covariance/matrix/effective-rank': {
      $post: {
        input: { json: { assets: number; assetsCovarianceMatrix: number[][] } }
        output: { assetsCovarianceMatrixEffectiveRank: number[][] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/covariance/matrix/exponentially-weighted': {
      $post: {
        input: { json: { assets: { assetReturns: number[] }[]; decayFactor?: number | undefined } }
        output: { assetsCovarianceMatrix: number[][] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/covariance/matrix/validation': {
      $post: {
        input: { json: { assets: number; assetsCovarianceMatrix: number[][] } }
        output: {
          message:
            | 'valid covariance matrix'
            | 'invalid covariance matrix - non symmetric matrix'
            | 'invalid covariance matrix - non positive diagonal elements'
            | 'invalid covariance matrix - non positive semi-definite matrix'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/kurtosis': {
      $post: {
        input: { json: { assets: { assetReturns: number[] }[] } }
        output: { assets: { assetKurtosis: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/prices/adjusted': {
      $post: {
        input: {
          json: {
            assets: {
              assetDividends?: { amount: number; date: string }[] | undefined
              assetPrices: { close: number; date: string }[]
              assetSplits?: { date: string; factor: number }[] | undefined
            }[]
          }
        }
        output: {
          assets: {
            assetAdjustedPrices: {
              date: string
              dividendAdjustedClose?: number | undefined
              fullyAdjustedClose: number
              splitAdjustedClose?: number | undefined
            }[]
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/prices/adjusted/forward': {
      $post: {
        input: {
          json: {
            assets: {
              assetDividends?: { amount: number; date: string }[] | undefined
              assetPrices: { close: number; date: string }[]
              assetSplits?: { date: string; factor: number }[] | undefined
            }[]
          }
        }
        output: {
          assets: {
            assetAdjustedPrices: {
              date: string
              dividendAdjustedClose?: number | undefined
              fullyAdjustedClose: number
              splitAdjustedClose?: number | undefined
            }[]
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/returns': {
      $post: {
        input: { json: { assets: { assetPrices: number[] }[] } }
        output: { assets: { assetReturns: number[] }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/returns/average': {
      $post: {
        input: { json: { assets: { assetReturns: number[] }[] } }
        output: { assets: { assetAverageReturn: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/returns/simulation/bootstrap': {
      $post: {
        input: {
          json: {
            assets: { assetReturns: number[] }[]
            bootstrapAverageBlockLength?: number | undefined
            bootstrapBlockLength?: number | undefined
            bootstrapMethod?: 'iid' | 'circularBlock' | 'stationaryBlock' | undefined
            simulations?: number | undefined
            simulationsLength?: number | undefined
          }
        }
        output: { simulations: { assets: { assetReturns: number[] }[] }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/skewness': {
      $post: {
        input: { json: { assets: { assetReturns: number[] }[] } }
        output: { assets: { assetSkewness: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/variance': {
      $post: {
        input: {
          json:
            | { assets: { assetReturns: number[] }[] }
            | { assets: number; assetsCovarianceMatrix: number[][] }
            | { assets: { assetVolatility: number }[] }
        }
        output: { assets: { assetVariance: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/volatility': {
      $post: {
        input: {
          json:
            | { assets: { assetReturns: number[] }[] }
            | { assets: number; assetsCovarianceMatrix: number[][] }
            | { assets: { assetVariance: number }[] }
        }
        output: { assets: { assetVolatility: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/factors/residualization': {
      $post: {
        input: { json: { factors: { factorReturns: number[] }[]; residualizedFactor: number } }
        output: { residualizedFactorReturns: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/alpha': {
      $post: {
        input: {
          json:
            | {
                benchmarkReturns: number[]
                portfolios: { portfolioReturns: number[] }[]
                riskFreeRate?: number | undefined
              }
            | {
                benchmarkReturns: number[]
                portfolios: { portfolioReturns: number[] }[]
                riskFreeReturns?: number[] | undefined
              }
        }
        output: { portfolios: { portfolioAlpha: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/beta': {
      $post: {
        input: {
          json:
            | {
                benchmarkReturns: number[]
                portfolios: { portfolioReturns: number[] }[]
                riskFreeRate?: number | undefined
              }
            | {
                benchmarkReturns: number[]
                portfolios: { portfolioReturns: number[] }[]
                riskFreeReturns?: number[] | undefined
              }
        }
        output: { portfolios: { portfolioBeta: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/conditional-value-at-risk': {
      $post: {
        input: { json: { alpha: number; portfolios: { portfolioValues: number[] }[] } }
        output: { portfolios: { portfolioConditionalValueAtRisk: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/contributions/return': {
      $post: {
        input: {
          json: {
            assets: number
            assetsGroups?: number[][] | undefined
            assetsReturns: number[]
            portfolios: { assetsWeights: number[] }[]
          }
        }
        output: {
          portfolios: {
            assetsGroupsReturnContributions?: number[] | undefined
            assetsReturnContributions: number[]
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/contributions/risk': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            assetsGroups?: number[][] | undefined
            portfolios: { assetsWeights: number[] }[]
          }
        }
        output: {
          portfolios: {
            assetsGroupsRiskContributions?: number[] | undefined
            assetsRiskContributions: number[]
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/correlation-spectrum': {
      $post: {
        input: {
          json:
            | {
                assets: number
                assetsCovarianceMatrix: number[][]
                portfolios: { assetsWeights: number[] }[]
              }
            | { assets: { assetPrices: number[] }[]; portfolios: { portfolioValues: number[] }[] }
        }
        output: { portfolios: { portfolioCorrelationSpectrum: number[] }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/diversification-ratio': {
      $post: {
        input: {
          json:
            | {
                assets: number
                assetsCovarianceMatrix: number[][]
                portfolios: { assetsWeights: number[] }[]
              }
            | { assets: { assetPrices: number[] }[]; portfolios: { portfolioValues: number[] }[] }
        }
        output: { portfolios: { portfolioDiversificationRatio: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/drawdowns': {
      $post: {
        input: { json: { portfolios: { portfolioValues: number[] }[] } }
        output: {
          portfolios: {
            portfolioDrawdowns: number[]
            portfolioWorstDrawdowns: {
              drawdownBottom: number
              drawdownDepth: number
              drawdownEnd: number
              drawdownStart: number
            }[]
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/effective-number-of-bets': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            factorsExtractionMethod?:
              | 'principalComponentAnalysis'
              | 'exactMinimumLinearTorsion'
              | 'approximateMinimumLinearTorsion'
              | undefined
            portfolios: { assetsWeights: number[] }[]
          }
        }
        output: { portfolios: { portfolioEffectiveNumberOfBets: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/factors/exposures': {
      $post: {
        input: {
          json: {
            factors?: { factorReturns: number[] }[] | undefined
            portfolios: { portfolioReturns: number[] }[]
          }
        }
        output: {
          portfolios: {
            portfolioAlpha: number
            portfolioBetas: number[]
            portfolioRSquared: number
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/mean-variance/efficient-frontier': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            assetsReturns: number[]
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
            portfolios?: number | undefined
          }
        }
        output: {
          portfolios: {
            assetsWeights: number[]
            portfolioReturn: number
            portfolioVolatility: number
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/mean-variance/minimum-variance-frontier': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            assetsReturns: number[]
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
            portfolios?: number | undefined
          }
        }
        output: {
          portfolios: {
            assetsWeights: number[]
            portfolioReturn: number
            portfolioVolatility: number
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/return': {
      $post: {
        input: {
          json:
            | { assets: number; assetsReturns: number[]; portfolios: { assetsWeights: number[] }[] }
            | { portfolios: { portfolioValues: number[] }[] }
        }
        output: { portfolios: { portfolioReturn: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/returns/average': {
      $post: {
        input: { json: { portfolios: { portfolioValues: number[] }[] } }
        output: { portfolios: { portfolioAverageReturn: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/sharpe-ratio': {
      $post: {
        input: {
          json:
            | {
                assets: number
                assetsCovarianceMatrix: number[][]
                assetsReturns: number[]
                portfolios: { assetsWeights: number[] }[]
                riskFreeRate: number
              }
            | { portfolios: { portfolioValues: number[] }[]; riskFreeRate: number }
        }
        output: { portfolios: { portfolioSharpeRatio: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/sharpe-ratio/bias-adjusted': {
      $post: {
        input: { json: { portfolios: { portfolioValues: number[] }[]; riskFreeRate: number } }
        output: { portfolios: { portfolioBiasAdjustedSharpeRatio: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/sharpe-ratio/confidence-interval': {
      $post: {
        input: {
          json: {
            confidenceIntervalType?: 'twoSided' | 'lowerOneSided' | 'upperOneSided' | undefined
            confidenceLevel?: number | undefined
            portfolios: { portfolioValues: number[] }[]
            riskFreeRate: number
          }
        }
        output: { portfolios: { portfolioSharpeRatioConfidenceInterval: number[] }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/sharpe-ratio/probabilistic': {
      $post: {
        input: {
          json:
            | {
                benchmarkSharpeRatio: number
                portfolios: { portfolioValues: number[] }[]
                riskFreeRate: number
              }
            | {
                benchmarkValues: number[]
                portfolios: { portfolioValues: number[] }[]
                riskFreeRate: number
              }
        }
        output: { portfolios: { portfolioProbabilisticSharpeRatio: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length': {
      $post: {
        input: {
          json:
            | {
                benchmarkSharpeRatio: number
                confidenceLevel?: number | undefined
                portfolios: { portfolioValues: number[] }[]
                riskFreeRate: number
              }
            | {
                benchmarkValues?: number[] | undefined
                confidenceLevel?: number | undefined
                portfolios: { portfolioValues: number[] }[]
                riskFreeRate: number
              }
        }
        output: { portfolios: { portfolioSharpeRatioMinimumTrackRecordLength: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/tracking-error': {
      $post: {
        input: {
          json: { benchmarkReturns: number[]; portfolios: { portfolioReturns: number[] }[] }
        }
        output: { portfolios: { portfolioTrackingError: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/ulcer-index': {
      $post: {
        input: { json: { portfolios: { portfolioValues: number[] }[]; riskFreeRate: number } }
        output: { portfolios: { portfolioUlcerIndex: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/ulcer-performance-index': {
      $post: {
        input: { json: { portfolios: { portfolioValues: number[] }[]; riskFreeRate: number } }
        output: { portfolios: { portfolioUlcerPerformanceIndex: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/value-at-risk': {
      $post: {
        input: { json: { alpha: number; portfolios: { portfolioValues: number[] }[] } }
        output: { portfolios: { portfolioValueAtRisk: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/analysis/volatility': {
      $post: {
        input: {
          json:
            | {
                assets: number
                assetsCovarianceMatrix: number[][]
                portfolios: { assetsWeights: number[] }[]
              }
            | { portfolios: { portfolioValues: number[] }[] }
        }
        output: { portfolios: { portfolioVolatility: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/construction/investable': {
      $post: {
        input: {
          json: {
            assets: number
            assetsGroups?: number[][] | undefined
            assetsGroupsWeights?: number[] | undefined
            assetsMinimumNotionalValues?: number[] | undefined
            assetsMinimumPositions?: number[] | undefined
            assetsPrices: number[]
            assetsSizeLots?: number[] | undefined
            assetsWeights?: number[] | undefined
            maximumAssetsGroupsWeights?: number[] | undefined
            portfolioValue: number
          }
        }
        output: { assetsPositions: number[]; assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/construction/mimicking': {
      $post: {
        input: {
          json: {
            assets: { assetReturns: number[] }[]
            benchmarkReturns: number[]
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/construction/random': {
      $post: {
        input: {
          json: {
            assets: number
            constraints?:
              | {
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
            portfolios?: number | undefined
          }
        }
        output: { portfolios: { assetsWeights: number[] }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/equal-risk-contributions': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            constraints?:
              | {
                  maximumAssetsWeights?: number[] | undefined
                  minimumAssetsWeights?: number[] | undefined
                }
              | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/equal-sharpe-ratio-contributions': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            assetsReturns: number[]
            riskFreeRate: number
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/equal-volatility-weighted': {
      $post: {
        input: { json: { assets: number; assetsVolatilities: number[] } }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/equal-weighted': {
      $post: {
        input: { json: { assets: number } }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/hierarchical-risk-parity': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            clusteringMethod?:
              | 'singleLinkage'
              | 'averageLinkage'
              | 'completeLinkage'
              | 'wardLinkage'
              | undefined
            clusteringOrdering?: 'r-hclust' | 'optimal' | undefined
            constraints?:
              | {
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/hierarchical-risk-parity/clustering-based': {
      $post: {
        input: {
          json: {
            acrossClusterAllocationMethod?:
              | 'equalWeighting'
              | 'inverseVolatility'
              | 'inverseVariance'
              | undefined
            assets: number
            assetsCovarianceMatrix: number[][]
            clusteringMethod?:
              | 'singleLinkage'
              | 'averageLinkage'
              | 'completeLinkage'
              | 'wardLinkage'
              | undefined
            clusteringOrdering?: 'r-hclust' | 'optimal' | undefined
            clusters?: number | undefined
            constraints?:
              | {
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
            withinClusterAllocationMethod?:
              | 'equalWeighting'
              | 'inverseVolatility'
              | 'inverseVariance'
              | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/inverse-variance-weighted': {
      $post: {
        input: { json: { assets: number; assetsVariances: number[] } }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/inverse-volatility-weighted': {
      $post: {
        input: { json: { assets: number; assetsVolatilities: number[] } }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/market-capitalization-weighted': {
      $post: {
        input: { json: { assets: number; assetsMarketCapitalizations: number[] } }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/maximum-decorrelation': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCorrelationMatrix: number[][]
            assetsReturns?: number[] | undefined
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/maximum-return': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix?: number[][] | undefined
            assetsReturns: number[]
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/maximum-return/diversified': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix?: number[][] | undefined
            assetsReturns: number[]
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  deltaReturn?: number | undefined
                  deltaVolatility?: number | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/maximum-return/subset-resampling-based': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix?: number[][] | undefined
            assetsReturns: number[]
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
            subsetPortfolios?: number | undefined
            subsetPortfoliosAggregationMethod?: 'average' | 'median' | undefined
            subsetPortfoliosEnumerationMethod?: 'complete' | 'randomSampling' | undefined
            subsetSize?: number | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/maximum-sharpe-ratio': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            assetsReturns: number[]
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
            riskFreeRate: number
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/maximum-sharpe-ratio/diversified': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            assetsReturns: number[]
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  deltaReturn?: number | undefined
                  deltaVolatility?: number | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
            riskFreeRate: number
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            assetsReturns: number[]
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
            riskFreeRate: number
            subsetPortfolios?: number | undefined
            subsetPortfoliosAggregationMethod?: 'average' | 'median' | undefined
            subsetPortfoliosEnumerationMethod?: 'complete' | 'randomSampling' | undefined
            subsetSize?: number | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/maximum-ulcer-performance-index': {
      $post: {
        input: {
          json: {
            assets: { assetPrices: number[] }[]
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
            riskFreeRate: number
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/mean-variance-efficient': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            assetsReturns: number[]
            constraints: {
              assetsGroups?: number[][] | undefined
              assetsGroupsMatrix?: number[][] | undefined
              maximumAssetsGroupsWeights?: number[] | undefined
              maximumAssetsWeights?: number[] | undefined
              maximumPortfolioExposure?: number | undefined
              minimumAssetsWeights?: number[] | undefined
              minimumPortfolioExposure?: number | undefined
              portfolioReturn?: number | undefined
              portfolioVolatility?: number | undefined
              riskTolerance?: number | undefined
            }
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/mean-variance-efficient/diversified': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            assetsReturns: number[]
            constraints: {
              assetsGroups?: number[][] | undefined
              assetsGroupsMatrix?: number[][] | undefined
              deltaReturn?: number | undefined
              deltaVolatility?: number | undefined
              maximumAssetsGroupsWeights?: number[] | undefined
              maximumAssetsWeights?: number[] | undefined
              maximumPortfolioExposure?: number | undefined
              minimumAssetsWeights?: number[] | undefined
              minimumPortfolioExposure?: number | undefined
              portfolioReturn?: number | undefined
              portfolioVolatility?: number | undefined
              riskTolerance?: number | undefined
            }
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/mean-variance-efficient/subset-resampling-based': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            assetsReturns: number[]
            constraints: {
              assetsGroups?: number[][] | undefined
              assetsGroupsMatrix?: number[][] | undefined
              maximumAssetsGroupsWeights?: number[] | undefined
              maximumAssetsWeights?: number[] | undefined
              maximumPortfolioExposure?: number | undefined
              minimumAssetsWeights?: number[] | undefined
              minimumPortfolioExposure?: number | undefined
              portfolioReturn?: number | undefined
              portfolioVolatility?: number | undefined
              riskTolerance?: number | undefined
            }
            subsetPortfolios?: number | undefined
            subsetPortfoliosAggregationMethod?: 'average' | 'median' | undefined
            subsetPortfoliosEnumerationMethod?: 'complete' | 'randomSampling' | undefined
            subsetSize?: number | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/minimum-correlation': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCorrelationMatrix: number[][]
            assetsVolatilities: number[]
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/minimum-ulcer-index': {
      $post: {
        input: {
          json: {
            assets: { assetPrices: number[] }[]
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/minimum-variance': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            assetsReturns?: number[] | undefined
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/minimum-variance/diversified': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            assetsReturns?: number[] | undefined
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  deltaReturn?: number | undefined
                  deltaVolatility?: number | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/minimum-variance/subset-resampling-based': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            assetsReturns?: number[] | undefined
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
            subsetPortfolios?: number | undefined
            subsetPortfoliosAggregationMethod?: 'average' | 'median' | undefined
            subsetPortfoliosEnumerationMethod?: 'complete' | 'randomSampling' | undefined
            subsetSize?: number | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/optimization/most-diversified': {
      $post: {
        input: {
          json: {
            assets: number
            assetsCovarianceMatrix: number[][]
            constraints?:
              | {
                  assetsGroups?: number[][] | undefined
                  assetsGroupsMatrix?: number[][] | undefined
                  maximumAssetsGroupsWeights?: number[] | undefined
                  maximumAssetsWeights?: number[] | undefined
                  maximumPortfolioExposure?: number | undefined
                  minimumAssetsWeights?: number[] | undefined
                  minimumPortfolioExposure?: number | undefined
                }
              | undefined
          }
        }
        output: { assetsWeights: number[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/simulation/rebalancing/drift-weight': {
      $post: {
        input: {
          json: { assets: { assetPrices: number[] }[]; portfolios: { assetsWeights: number[] }[] }
        }
        output: { portfolios: { portfolioValues: number[] }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/simulation/rebalancing/fixed-weight': {
      $post: {
        input: {
          json: { assets: { assetPrices: number[] }[]; portfolios: { assetsWeights: number[] }[] }
        }
        output: { portfolios: { portfolioValues: number[] }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/portfolio/simulation/rebalancing/random-weight': {
      $post: {
        input: { json: { assets: { assetPrices: number[] }[]; portfolios?: number | undefined } }
        output: { portfolios: { portfolioValues: number[] }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
