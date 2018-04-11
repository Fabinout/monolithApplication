package io.github.monolith.application.repository.search;

import io.github.monolith.application.domain.Country;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Country entity.
 */
public interface CountrySearchRepository extends ElasticsearchRepository<Country, Long> {
}
