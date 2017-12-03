﻿/*
 * actions
 */

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

/*
 * actions creators
 */
export function addItem(name, number,email,address) {
    return {
        type: ADD_ITEM,
        name,
        number,
        email,
        address
    };
}

export function deleteItem(index) {
    return {
        type: DELETE_ITEM,
        index
    };
}

export function editItem(index, name, number,email,address) {
    return {
        type: EDIT_ITEM,
        index,
        name, 
        number,
        email,
        address
    };
}