let consts = {};

consts.nvigatorLink = [
    {
		"key": "Summary",
		"value": "概要",
        icon: "icon-jj-home",
		"url": "/summary"
	},
    {
        'key': 'Resource',
        'value': '资源',
        icon: 'icon-jj-cloud',
        'sublist': [
            {
                'key': 'Console',
                'value': '主控管理',
                'url': '/resource/console'
            },
            {
                'key': 'Pool',
                'value': '资源池管理',
                'url': '/resource/pool'
            },
            {
                'key': 'Storage',
                'value': '存储管理',
                'url': '/resource/storage'
            }
        ]
    },
    {
        'key': 'Network',
        'value': '网络',
        icon: 'icon-jj-017',
        'sublist': [
            {
                'key': 'ManageNetwork',
                'value': '管理网络',
                'url': '/network/manageNetwork'
            },
            {
                'key': 'VirtualSwitch',
                'value': '分布式虚拟交换机',
                'url': '/network/virtualSwitch'
            },
            {
                'key': 'DataNetwork',
                'value': '数据网络',
                'url': '/network/dataNetwork'
            },
            {
                'key': 'DHCP',
                'value': 'DHCP',
                'url': '/network/dhcp'
            }
        ]
    },
    {
        'key': 'Desktop',
        'value': '桌面',
        icon: 'icon-jj-pc',
        'sublist': [
            {
                'key': 'Teaching_desktop',
                'value': '教学桌面',
                'url': '/desktop/scene'
            },
            {
                'key': 'Personal_desktop',
                'value': '个人桌面',
                'url': '/desktop/personal'
            },
            {
                'key': 'Personal_desktop_pool',
                'value': '个人桌面池',
                'url': '/desktop/pool'
            }
        ]
    },
    {
        'key': 'Template',
        'value': '模板',
        icon: 'icon-jj-Template',
        'sublist': [
            {
                'key': 'Teaching_template',
                'value': '教学模板',
                'url': '/template/teach'
            },
            {
                'key': 'Personal_template',
                'value': '个人模板',
                'url': '/template/personal'
            },
            {
                'key': 'Hardware_template',
                'value': '硬件模板',
                'url': '/template/hardware'
            }
        ]
    },
    {
        'key': 'Terminal',
        'value': '终端',
        icon: 'icon-jj-Terminal',
        'sublist': [
            {
                'key': 'Classroom',
                'value': '教室管理',
                'url': '/terminal/schoolroom'
            },
            {
                'key': 'Terminal_Manage',
                'value': '终端管理',
                'url': '/terminal/client'
            }
        ]
    },
    {
        'key': 'User',
        'value': '用户',
        icon: 'icon-jj-men',
        'sublist': [
            {
                'key': 'Role_Manage',
                'value': '角色管理',
                'url': '/user/role'
            },
            {
                'key': 'Administrator',
                'value': '管理用户',
                'url': '/user/admin'
            },
            {
                'key': 'Common_user',
                'value': '普通用户',
                'url': '/user/common'
            },
            {
                'key': 'Domain_user',
                'value': '域用户',
                'url': '/user/domain'
            }
        ]
    },
    {
        'key': 'Monitor',
        'value': '监控',
        icon: 'icon-jj-Monitor',
        'sublist': [
            {
                'key': 'Host_monitoring',
                'value': '主机监控',
                'url': '/monitor/host'
            },
            {
                'key': 'Desktop_monitoring',
                'value': '桌面监控',
                'url': '/monitor/desktop'
            },
            {
                'key': 'Alarm_information',
                'value': '告警信息',
                'url': '/monitor/alarm'
            },
            {
                'key': 'Alarm_policy',
                'value': '告警策略',
                'url': '/monitor/policy'
            }
        ]
    },
    {
        'key': 'Timetable',
        'value': '排课',
        icon: 'icon-jj-paike',
        'sublist': [
            {
                'key': 'Course_list',
                'value': '课程列表',
                'url': '/scheduler/view'
            }
        ]
    },
    {
        'key': 'Plan',
        'value': '计划任务',
        icon: 'icon-jj-012',
        'sublist': [
            {
                'key': 'Timer_switch',
                'value': '定时开关机',
                'url': '/plan/switch'
            },
            {
                'key': 'Host_switch',
                'value': '主机定时开关机',
                'url': '/plan/hostSwitch'
            }
        ]
    },
    {
        'key': 'HA',
        'value': '高可用性',
        icon: 'icon-jj-001',
        'sublist': [
            {
                'key': 'desktop_ha',
                'value': '桌面HA',
                'url': '/HA/desktop'
            }
        ]
    },
    {
        'key': 'System',
        'value': '系统',
        icon: 'icon-jj-Setup',
        'sublist': [
            {
                'key': 'System_deploy',
                'value': '快速部署',
                'url': '/system/deploy'
            },
            {
                'key': 'System_desktop',
                'value': '系统桌面',
                'url': '/system/desktop'
            },
            {
                'key': 'System_ISO',
                'value': '系统 ISO',
                'url': '/system/iso'
            },
            {
                'key': 'USB_redirection',
                'value': 'USB 重定向',
                'url': '/system/usb'
            },
            {
                'key': 'USB_through',
                'value': 'USB 透传',
                'url': '/system/through'
            },
            {
                'key': 'AutoSnapshot',
                'value': '自动快照',
                'url': '/system/snapshot'
            },
            {
                'key': 'System_set',
                'value': '系统设置',
                'url': '/system/set'
            },
            // {
            // 	"key": "USB_device",
            // 	"value": "主机 USB 设备",
            // 	"url": "/system/device"
            // },
            {
                'key': 'System_backup',
                'value': '系统备份',
                'url': '/system/backup'
            },
            {
                'key': 'System_upgrade',
                'value': '系统升级',
                'url': '/system/upgrade'
            },
            {
                'key': 'Operation_log',
                'value': '操作日志',
                'url': '/system/logs'
            }
            // {
            // 	"key": "End_log",
            // 	"value": "后台日志",
            // 	"url": "/system/endlogs"
            // }
        ]
    }
];

export default consts;