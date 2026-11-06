//your JS code here. If required.
const codes=document.querySelectorAll('.code');
if(codes.length>0){
	codes[0].focus();
}
codes.forEach((code,idx) => {
	code.addEventListener('keydown',(e) => {
		if(e.key>='0' && e.key<='9'){
			
			setTimeout(() => {
				if(codes[idx+1]){
				codes[idx+1].focus();	
				}
			}, 10); 
					  
		} else if(e.key==='Backspace'){
			setTimeout(() => {
			 if(codes[idx-1]){
codes[idx-1].focus();
			}
				}, 10);
		}
		
	});
});
