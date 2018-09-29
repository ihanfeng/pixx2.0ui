/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */
export const tableOption = {
    border: true,
    index: true,
    indexLabel: '序号',
    stripe: true,
    menuAlign: 'center',
    editBtn: false,
    delBtn: false,
    align: 'center',
    addBtn: false,
    column: [{
        fixed: true,
        label: 'id',
        prop: 'userId',
        span: 24,
        editDisabled: true,
        addVisdiplay: false,
    }, {
        fixed: true,
        label: '用户名',
        prop: 'username',
        solt: true,
        search: true,
        span: 24,
        rules: [{
                required: true,
                message: "请输入账户",
                trigger: "blur"
            },
            {
                min: 3,
                max: 20,
                message: "长度在 3 到 20 个字符",
                trigger: "blur"
            }
        ]
    }, {
        label: '密码',
        prop: 'password',
        type: 'password',
        hide: true,
        span: 24,
        rules: [{
                required: true,
                message: "请输入密码",
                trigger: "blur"
            },
            {
                min: 6,
                max: 20,
                message: "长度在 6 到 20 个字符",
                trigger: "blur"
            }
        ]
    }, {
        label: '所属部门',
        prop: 'deptId',
        search: true,
        formsolt: true,
        solt: true,
        span: 24,
        rules: [{
            required: true,
            message: "请选择部门",
            trigger: "blur"
        }]
    }, {
        label: '角色',
        prop: 'role',
        formsolt: true,
        solt: true,
        search: true,
        span: 24,
        rules: [{
            required: true,
            message: "请选择角色",
            trigger: "blur"
        }],
    }, {
        label: '状态',
        prop: 'delFlag',
        type: "select",
        solt: true,
        search: true,
        span: 24,
        rules: [{
            required: true,
            message: "请选择状态",
            trigger: "blur"
        }],
        dicData: [{
            label: '有效',
            value: '0'
        }, {
            label: '无效',
            value: '1'
        }, {
            label: '锁定',
            value: '9'
        }]
    }, {
        width: 180,
        label: '创建时间',
        prop: 'createTime',
        type: 'datetime',
        format: 'yyyy-MM-dd HH:mm',
        valueFormat: 'yyyy-MM-dd HH:mm:ss',
        search: true,
        more: true,
        editDisabled: true,
        addVisdiplay: false,
        span: 24,
    }]
}