import React from 'react'
import './App.css'
import OrgChart from '@unicef/react-org-chart'
import { BrowserRouter, Route } from 'react-router-dom'
import { tree, tree1, tree2, tree3, tree4 } from './Tree'
import { tree250temp1 } from './test250-1'
import { tree250temp2 } from './test250-2'
import { tree250temp3 } from './test250-3'
import { tree250temp4 } from './test250-4'
import { tree250temp5 } from './test250-5'
import { tree250temp6 } from './test250-6'
import { tree250temp7 } from './test250-7'
import { tree250temp8 } from './test250-8'
import { tree250temp9 } from './test250-9'
import { tree250temp10 } from './test250-10'
import { tree250temp11 } from './test250-11'
import { tree250temp12 } from './test250-12'
import { tree250temp13 } from './test250-13'
import { tree250temp14 } from './test250-14'
import { tree250temp15 } from './test250-15'
import { tree250temp16 } from './test250-16'
import { tree250temp17 } from './test250-17'
import { tree250temp18 } from './test250-18'
import { tree250temp19 } from './test250-19'
import { tree250temp20 } from './test250-20'
import { tempTree250 } from './test250'
import { tempTree5000 } from './test5000'
import avatarPersonnel from './assets/avatar-personnel.svg'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tree: tree,
      downloadingChart: false,
      config: {},
      highlightPostNumbers: [1],
    }
  }

  getChild = id => {
    console.log('call getChild', id)
    switch (id) {
      case 100:
        return tree250temp1
        // return tempTree5000
      case 250:
        return tempTree250
      case 36:
        return tree2
      case 56:
        return tree3
      case 25:
        return tree4
      case 10000125:
        return tree250temp2
      case 20000125:
        return tree250temp3
      case 30000125:
        return tree250temp4
      case 40000125:
        return tree250temp5
      case 50000125:
        return tree250temp6
      case 60000125:
        return tree250temp7
      case 70000125:
        return tree250temp8
      case 80000125:
        return tree250temp9
      case 90000125:
        return tree250temp10
      case 100000125:
        return tree250temp11
      case 110000125:
        return tree250temp12
      case 120000125:
        return tree250temp13
      case 130000125:
        return tree250temp14
      case 140000125:
        return tree250temp15
      case 150000125:
        return tree250temp16
      case 160000125:
        return tree250temp17
      case 170000125:
        return tree250temp18
      case 180000125:
        return tree250temp19
      case 190000125:
        return tree250temp20                                              
      default:
        return console.log('no children')
    }
  }

  getParent = d => {
    if (d.id === 100) {
      return {
        id: 500,
        person: {
          id: 500,
          avatar: avatarPersonnel,
          department: '',
          name: 'Pascal ruth',
          title: 'Member',
          totalReports: 1,
        },
        hasChild: false,
        hasParent: true,
        children: [d],
      }
    } else if (d.id === 500) {
      return {
        id: 1,
        person: {
          id: 1,
          avatar: avatarPersonnel,
          department: '',
          name: 'Bryce joe',
          title: 'Director',
          totalReports: 1,
        },
        hasChild: false,
        hasParent: false,
        children: [d],
      }
    } else {
      return d
    }
  }

  handleDownload = () => {
    this.setState({ downloadingChart: false })
  }

  handleOnChangeConfig = config => {
    this.setState({ config: config })
  }

  handleLoadConfig = () => {
    const { config } = this.state
    return config
  }

  render() {
    const { tree, downloadingChart } = this.state

    //For downloading org chart as image or pdf based on id
    const downloadImageId = 'download-image'
    const downloadPdfId = 'download-pdf'

    return (
      <BrowserRouter basename="/react-org-chart">
        <Route exact path="/">
          <React.Fragment>
            <div className="zoom-buttons">
              <button
                className="btn btn-outline-primary zoom-button"
                id="zoom-in"
              >
                +
              </button>
              <button
                className="btn btn-outline-primary zoom-button"
                id="zoom-out"
              >
                -
              </button>
            </div>
            <div className="download-buttons">
              <button className="btn btn-outline-primary" id="download-image">
                Download as image
              </button>
              <button className="btn btn-outline-primary" id="download-pdf">
                Download as PDF
              </button>
              <a
                className="github-link"
                href="https://github.com/unicef/react-org-chart"
              >
                Github
              </a>
              {downloadingChart && <div>Downloading chart</div>}
            </div>
            <OrgChart
              tree={tree}
              downloadImageId={downloadImageId}
              downloadPdfId={downloadPdfId}
              onConfigChange={config => {
                this.handleOnChangeConfig(config)
              }}
              loadConfig={d => {
                let configuration = this.handleLoadConfig(d)
                if (configuration) {
                  return configuration
                }
              }}
              downlowdedOrgChart={d => {
                this.handleDownload()
              }}
              loadImage={d => {
                return Promise.resolve(avatarPersonnel)
              }}
              loadParent={d => {
                const parentData = this.getParent(d)
                return parentData
              }}
              loadChildren={d => {
                const childrenData = this.getChild(d.id)
                return childrenData
              }}
            />
          </React.Fragment>
        </Route>
      </BrowserRouter>
    )
  }
}
