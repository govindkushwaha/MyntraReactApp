import React from "react";
import classess from './Filters.module.css';
import { GENDER_FILTER } from '../../globle-variables';
import { CATEGORY_FILTER } from '../../globle-variables'



const Filters = (props) => {

    const { genderFilter, onGenderFilterChange, categoryFilter, onCategoryFilterChange } = props;

    const getGenderFilter = () => {
        return (GENDER_FILTER.map(element => {
            return (
                <div class="form-check">
                    <input class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id={element.id}
                        checked={genderFilter === element.id}
                        onChange={() => onGenderFilterChange(element.id)}

                    />
                    <label class="form-check-label" for={element.id}>
                        {element.label}
                    </label>
                </div>
            )
        })
        )
    }

    const getCategoryFilter = () => {
        return (CATEGORY_FILTER.map(elements => {
            return (
                <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                        value=""
                        id={elements.id}
                        checked={categoryFilter.includes(elements.id)}
                        onChange={() => onCategoryFilterChange(elements.id)}
                    />
                    <label class="form-check-label" for={elements.id}>
                        {elements.label}
                    </label>
                </div>
            )
        })

        )
    }
    return (
        <div className={classess.filterSection}>

            <div className={classess.genderFilterSection}>
                <h6> Gender</h6>
                {getGenderFilter()}
            </div>

            <div className={classess.categoryFilterSection}>
                <h6> Category </h6>
                {getCategoryFilter()}
            </div>
        </div>
    )
}

export default Filters