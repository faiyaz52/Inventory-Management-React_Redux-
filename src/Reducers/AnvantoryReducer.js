import { ADD_ANVENTORY,
  GET_ANVERTORY,
  UPDATE_ANVERTORY,
  DELETE_ANVERTORY,
  SELECT_ANVERTORY,
  CLEAR_ANVERTORY,
  DELETE_SELECT_ANVERTORY
 } from '../constant/type';
const inialState={
  anventory:[
    {
      "id": 1,
      "ProductID": "123",
      "ProductName": "LG3201k A5",
      "ModelNumber": "LG102030",
      "Category": "Module",
      "SKU": "M-H13",
      "Quantity": "123",
    }, 
    {
      "id": 2,
      "ProductID": "124",
      "ProductName": "LG3201k A6",
      "ModelNumber": "LG102040",
      "Category": "Inverter",
      "SKU": "M-H14",
      "Quantity": "223",
    },
    {
      "id": 3,
      "ProductID": "125",
      "ProductName": "LG3201k A7",
      "ModelNumber": "LG102050",
      "Category": "Optimizer",
      "SKU": "M-H15",
      "Quantity": "323",
    },
    {
      "id":4,
      "ProductID": "133",
      "ProductName": "LG3201k 95",
      "ModelNumber": "LG104900",
      "Category": "Module",
      "SKU": "M-H33",
      "Quantity": "423",
    },
      {
      "id": 5,
      "ProductID": "123",
      "ProductName": "LG3201k A5",
      "ModelNumber": "LG102030",
      "Category": "Module",
      "SKU": "M-H13",
      "Quantity": "123",
    }, 
    {
      "id": 6,
      "ProductID": "124",
      "ProductName": "LG3201k A6",
      "ModelNumber": "LG102040",
      "Category": "Inverter",
      "SKU": "M-H14",
      "Quantity": "223",
    },
    {
      "id": 7,
      "ProductID": "125",
      "ProductName": "LG3201k A7",
      "ModelNumber": "LG102050",
      "Category": "Optimizer",
      "SKU": "M-H15",
      "Quantity": "323",
    },
    {
      "id":8,
      "ProductID": "133",
      "ProductName": "LG3201k 95",
      "ModelNumber": "LG104900",
      "Category": "Module",
      "SKU": "M-H33",
      "Quantity": "423",
    },
  ],
 
  anventorys:null,
  selectedAnventorys:[],

};
export const AnventoryReducer = (state = inialState , action)=>{

    switch( action.type){
      case ADD_ANVENTORY:
        return{
          ...state,
          anventory:[action.payload,...state.anventory]
        }
        case GET_ANVERTORY:
          let arr = state.anventory.filter((anventorys)=> anventorys.id == action.payload);
          arr=arr.values();
          for(let val of arr){
            arr = val ;
          }
          return{
            ...state,
            anventorys:arr,
          };
          case UPDATE_ANVERTORY:
            return{
              ...state,
              anventory:state.anventory.map(anventory => anventory.id == action.payload.id ? action.payload:anventory),
            }
            case DELETE_ANVERTORY:
              return{
                ...state,
                anventory:state.anventory.filter((anventory)=>anventory.id !=action.payload)
              }
              case SELECT_ANVERTORY:
                return {
                  ...state,
                  selectedAnventorys: action.payload,
                }
              case CLEAR_ANVERTORY:
                return {
                  ...state,
                  selectedAnventorys:[]
                }
              case DELETE_SELECT_ANVERTORY:
                return{
                  ...state,
                  anventory:[]
                } 
        default:
        return state
    }
};

